<#
.SYNOPSIS
  Point an NSSM-wrapped llama.cpp service at a different model file and/or context
  size, restart it, and roll back if the endpoint doesn't come back healthy.
.DESCRIPTION
  Reads the service's current AppParameters from the registry (clean string),
  swaps the `-m <path>` and `--ctx-size <n>` arguments in place (every other flag
  preserved), restarts, and polls /health. If the new config fails to serve
  (e.g. a higher quant + context that overflows VRAM), it restores the previous
  AppParameters and restarts so you're never left with a dead endpoint.

  Run elevated. Verifies the new model file exists before touching anything.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\swap-model.ps1 -Service llama-nemotron `
    -ModelPath G:\llama\models\...\model-Q5_K_XL.gguf -CtxSize 16384 -Port 8082
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$Service,
  [Parameter(Mandatory=$true)][string]$ModelPath,
  [Parameter(Mandatory=$true)][int]$CtxSize,
  [int]$Port = 8082,
  [string]$HealthPath = "/health",
  [int]$HealthTimeoutSec = 180
)
$ErrorActionPreference = "Stop"

function Assert-Admin {
  $p = [Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()
  if (-not $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw "Run elevated (Administrator) - this manages a Windows service."
  }
}
function Test-Health {
  try { (Invoke-RestMethod -Uri "http://localhost:$Port$HealthPath" -TimeoutSec 4).status -eq "ok" }
  catch { $false }
}
function Wait-Health([int]$timeoutSec) {
  $deadline = (Get-Date).AddSeconds($timeoutSec)
  while ((Get-Date) -lt $deadline) { if (Test-Health) { return $true }; Start-Sleep -Seconds 3 }
  return $false
}

Assert-Admin
$nssm = (Get-Command nssm -ErrorAction Stop).Source
if (-not (Test-Path $ModelPath)) { throw "Model file not found: $ModelPath" }
if (-not (Get-Service $Service -ErrorAction SilentlyContinue)) { throw "Service '$Service' not found." }

$pkey = "HKLM:\SYSTEM\CurrentControlSet\Services\$Service\Parameters"
$old = (Get-ItemProperty $pkey).AppParameters
if (-not $old) { throw "Could not read AppParameters for '$Service'." }
Write-Host "OLD: $old"

# Swap -m <path> and --ctx-size <n> in place; preserve every other flag.
$new = $old
$new = [regex]::Replace($new, '(-m\s+)(\S+)',          { param($m) $m.Groups[1].Value + $ModelPath })
$new = [regex]::Replace($new, '(--ctx-size\s+)(\d+)',  { param($m) $m.Groups[1].Value + $CtxSize })
if ($new -notmatch [regex]::Escape($ModelPath)) { throw "Failed to set -m (no -m flag found?)." }
if ($new -notmatch "--ctx-size\s+$CtxSize")     { throw "Failed to set --ctx-size (no flag found?)." }
Write-Host "NEW: $new"

& $nssm set $Service AppParameters "$new" | Out-Null
Write-Host "Restarting '$Service'..." -ForegroundColor Yellow
& $nssm restart $Service | Out-Null

Write-Host "Waiting for $HealthPath (model load can take a bit)..."
if (Wait-Health $HealthTimeoutSec) {
  Write-Host "HEALTHY on new config." -ForegroundColor Green
  exit 0
} else {
  Write-Host "NEW CONFIG UNHEALTHY (likely VRAM) - ROLLING BACK." -ForegroundColor Red
  & $nssm set $Service AppParameters "$old" | Out-Null
  & $nssm restart $Service | Out-Null
  if (Wait-Health 120) { Write-Host "Rolled back; previous config serving again." -ForegroundColor Yellow }
  else { Write-Host "ROLLBACK ALSO UNHEALTHY - investigate manually." -ForegroundColor Red }
  exit 1
}
