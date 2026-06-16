<#
.SYNOPSIS
  Rename/clone an NSSM-wrapped service to a new name with corrected metadata,
  cutting over safely with a health check and automatic rollback.
.DESCRIPTION
  NSSM has no native rename. This clones the source service's full config to a
  new service by copying its registry Parameters key VERBATIM (so AppParameters,
  AppEnvironmentExtra, AppExit, log/rotation settings transfer byte-for-byte with
  no re-escaping), then overrides DisplayName/Description/log paths/start type.

  Cutover order is fail-safe: configure the new service first, stop the old one,
  start the new one, poll the health endpoint, and ONLY remove the old service if
  the new one serves. If the endpoint never comes up, it rolls back to the old
  service and removes the half-built new one - leaving you exactly where you were.

  Run elevated (manages services). Idempotent-ish: refuses if the target exists.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\rename-model-service.ps1 `
    -OldName llama-glm4 -NewName llama-nemotron -Port 8082 `
    -DisplayName "Nemotron-3-Nano-Omni Reasoning Inference Server (llama.cpp :8082)" `
    -Description "NVIDIA Nemotron-3-Nano-Omni-30B-A3B Reasoning endpoint on :8082 (llama.cpp, CUDA0)"
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$OldName,
  [Parameter(Mandatory=$true)][string]$NewName,
  [Parameter(Mandatory=$true)][string]$DisplayName,
  [Parameter(Mandatory=$true)][string]$Description,
  [int]$Port = 8082,
  [string]$HealthPath = "/health",
  [int]$HealthTimeoutSec = 150,
  [string]$LogDir = "G:\llama\logs",
  [string]$StdoutLog = "",   # default: $LogDir\$NewName.log
  [string]$StderrLog = ""    # default: $LogDir\$NewName-err.log
)
$ErrorActionPreference = "Stop"

function Assert-Admin {
  $p = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
  if (-not $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw "Run elevated (Administrator) - this manages Windows services."
  }
}
function Test-Health {
  try { (Invoke-RestMethod -Uri "http://localhost:$Port$HealthPath" -TimeoutSec 4).status -eq "ok" }
  catch { $false }
}
function Wait-Health([int]$timeoutSec) {
  $deadline = (Get-Date).AddSeconds($timeoutSec)
  while ((Get-Date) -lt $deadline) {
    if (Test-Health) { return $true }
    Start-Sleep -Seconds 3
  }
  return $false
}

Assert-Admin
$nssm = (Get-Command nssm -ErrorAction Stop).Source
if (-not $StdoutLog) { $StdoutLog = Join-Path $LogDir "$NewName.log" }
if (-not $StderrLog) { $StderrLog = Join-Path $LogDir "$NewName-err.log" }

if (-not (Get-Service $OldName -ErrorAction SilentlyContinue)) { throw "Source service '$OldName' not found." }
if (Get-Service $NewName -ErrorAction SilentlyContinue)        { throw "Target service '$NewName' already exists - aborting." }

$svcRoot = "HKLM:\SYSTEM\CurrentControlSet\Services"
$app = (Get-ItemProperty "$svcRoot\$OldName\Parameters" -ErrorAction Stop).Application
if (-not $app) { throw "Could not read Application path from '$OldName'." }
Write-Host "Source '$OldName' wraps: $app" -ForegroundColor Cyan

# 1) Create the new service (base key + Parameters\Application).
& $nssm install $NewName "$app" | Out-Null
Write-Host "Installed service '$NewName'."

# 2) Clone the full Parameters subtree verbatim (AppParameters, AppEnvironmentExtra, AppExit, rotation...).
& reg.exe copy "HKLM\SYSTEM\CurrentControlSet\Services\$OldName\Parameters" `
               "HKLM\SYSTEM\CurrentControlSet\Services\$NewName\Parameters" /s /f | Out-Null
Write-Host "Copied NSSM Parameters from '$OldName' (env/flags preserved byte-for-byte)."

# 3) Override the metadata that should differ, plus base-key items reg-copy doesn't carry.
& $nssm set $NewName DisplayName  "$DisplayName"        | Out-Null
& $nssm set $NewName Description   "$Description"        | Out-Null
& $nssm set $NewName ObjectName    "LocalSystem"         | Out-Null
& $nssm set $NewName Start         "SERVICE_AUTO_START"  | Out-Null
& $nssm set $NewName AppStdout     "$StdoutLog"          | Out-Null
& $nssm set $NewName AppStderr     "$StderrLog"          | Out-Null
Write-Host "Set DisplayName/Description/ObjectName/Start + fresh log paths."

# 4) Cut over: stop old, start new, prove it serves.
Write-Host "Stopping '$OldName'..." -ForegroundColor Yellow
Stop-Service $OldName -Force -ErrorAction SilentlyContinue
& $nssm stop $OldName | Out-Null
Start-Sleep -Seconds 2

Write-Host "Starting '$NewName'..." -ForegroundColor Yellow
& $nssm start $NewName | Out-Null

Write-Host "Waiting for $HealthPath to report ok (up to ${HealthTimeoutSec}s; model reload takes a bit)..."
if (Wait-Health $HealthTimeoutSec) {
  Write-Host "NEW SERVICE HEALTHY. Removing old '$OldName'." -ForegroundColor Green
  & $nssm stop   $OldName confirm | Out-Null
  & $nssm remove $OldName confirm | Out-Null
  Write-Host "DONE: '$OldName' -> '$NewName' (auto-start, crash-restart, logging preserved)." -ForegroundColor Green
  exit 0
} else {
  Write-Host "NEW SERVICE DID NOT BECOME HEALTHY - ROLLING BACK." -ForegroundColor Red
  & $nssm stop $NewName | Out-Null
  Start-Sleep -Seconds 2
  & $nssm start $OldName | Out-Null
  $back = Wait-Health 90
  & $nssm remove $NewName confirm | Out-Null
  if ($back) { Write-Host "Rolled back: '$OldName' is serving again; '$NewName' removed." -ForegroundColor Yellow }
  else       { Write-Host "ROLLBACK HEALTH CHECK ALSO FAILED - investigate manually. '$NewName' removed." -ForegroundColor Red }
  exit 1
}
