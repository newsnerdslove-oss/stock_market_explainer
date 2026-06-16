<#
.SYNOPSIS
  Manage the llama-server (llama.cpp) Windows service that serves Nemotron, via NSSM.
.DESCRIPTION
  Run ON the Windows box (elevated). Idempotent:
    * If the service already exists, ensures it is auto-start and running.
    * If -LlamaServer and -ModelPath are given, (re)configures its command line.
    * If it does not exist and paths are given, installs it with NSSM.
  Your box already has the "llama-nemotron" service on :8082 — this keeps it
  healthy and surviving reboots, and lets you re-point it at a new model/quant.

  Requires NSSM (https://nssm.cc) on PATH, or pass -Nssm to its exe.
.EXAMPLE
  # Just ensure the existing service is auto-start + running:
  powershell -ExecutionPolicy Bypass -File .\service-nssm.ps1

.EXAMPLE
  # Re-point the service at a different model / quant:
  .\service-nssm.ps1 -LlamaServer "C:\llama\llama-server.exe" `
                     -ModelPath "C:\models\NVIDIA-Nemotron-3-Nano-Omni-30B-A3B-Reasoning-UD-Q6_K_XL.gguf" `
                     -Port 8082 -CtxSize 16384
#>
[CmdletBinding()]
param(
  [string]$ServiceName = "llama-nemotron",
  [string]$LlamaServer = "",
  [string]$ModelPath   = "",
  [int]$Port           = 8082,
  [int]$CtxSize        = 16384,
  [int]$GpuLayers      = 999,          # offload all layers to the 5090
  [string]$Nssm        = "nssm",
  [string]$ExtraArgs   = ""
)

$ErrorActionPreference = "Stop"

function Assert-Admin {
  $id = [Security.Principal.WindowsIdentity]::GetCurrent()
  $p = New-Object Security.Principal.WindowsPrincipal($id)
  if (-not $p.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw "Run this in an elevated (Administrator) PowerShell."
  }
}

Assert-Admin
$existing = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue

# Reconfigure (or install) only when new paths are supplied.
if ($LlamaServer -and $ModelPath) {
  if (-not (Test-Path $LlamaServer)) { throw "llama-server not found: $LlamaServer" }
  if (-not (Test-Path $ModelPath))   { throw "model not found: $ModelPath" }
  $args = "-m `"$ModelPath`" --host 0.0.0.0 --port $Port -c $CtxSize -ngl $GpuLayers $ExtraArgs".Trim()
  $appDir = Split-Path $LlamaServer

  if (-not $existing) {
    Write-Host "Installing service '$ServiceName' with NSSM..." -ForegroundColor Cyan
    & $Nssm install $ServiceName $LlamaServer
  } else {
    Write-Host "Updating command line for '$ServiceName'..." -ForegroundColor Cyan
    & $Nssm set $ServiceName Application $LlamaServer | Out-Null
  }
  & $Nssm set $ServiceName AppParameters $args | Out-Null
  & $Nssm set $ServiceName AppDirectory $appDir | Out-Null
  & $Nssm set $ServiceName AppStdout "$appDir\llama-nemotron.out.log" | Out-Null
  & $Nssm set $ServiceName AppStderr "$appDir\llama-nemotron.err.log" | Out-Null
}
elseif (-not $existing) {
  throw "Service '$ServiceName' does not exist. Re-run with -LlamaServer and -ModelPath to create it."
}

# Always ensure auto-start + running (idempotent).
& $Nssm set $ServiceName Start SERVICE_AUTO_START | Out-Null
Set-Service -Name $ServiceName -StartupType Automatic
if ((Get-Service $ServiceName).Status -ne "Running") {
  Start-Service $ServiceName
  Write-Host "Started '$ServiceName'." -ForegroundColor Green
} else {
  Write-Host "'$ServiceName' already running." -ForegroundColor Green
}

Write-Host "Service set to auto-start. Endpoint: http://0.0.0.0:$Port/v1"
Write-Host "Verify from your Mac:  curl http://192.168.110.145:$Port/v1/models"
