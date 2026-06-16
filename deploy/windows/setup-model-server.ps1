<#
.SYNOPSIS
  Prepare the Windows box to serve the local model (Nemotron) to your LAN.
.DESCRIPTION
  Opens the inference port through the firewall and verifies the OpenAI-compatible
  endpoint responds. Engine-agnostic — works whether you serve with llama.cpp,
  Ollama, LM Studio, or vLLM. Idempotent and safe to re-run.

  This does NOT install or start the inference engine (that's engine-specific);
  it wires the box so the web app and the benchmark harness can reach it, and
  tells you if the endpoint is live. Engine start examples are at the bottom.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\setup-model-server.ps1 -Port 8000
#>
[CmdletBinding()]
param(
  [int]$Port = 8000,
  [string]$HealthPath = "/v1/models"
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
Write-Host "== Configuring model server on port $Port ==" -ForegroundColor Cyan

# 1. Open the inference port inbound (so the Mac / web app / harness can reach it).
$ruleName = "LocalModel-In-TCP-$Port"
if (-not (Get-NetFirewallRule -Name $ruleName -ErrorAction SilentlyContinue)) {
  New-NetFirewallRule -Name $ruleName -DisplayName "Local model server (TCP $Port)" `
    -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort $Port | Out-Null
  Write-Host "Opened firewall TCP $Port."
} else {
  Write-Host "Firewall rule for TCP $Port already exists."
}

# 2. Verify the endpoint is actually serving (if the engine is running).
$url = "http://localhost:$Port$HealthPath"
Write-Host "Probing $url ..."
try {
  $resp = Invoke-RestMethod -Uri $url -TimeoutSec 5
  $ids = @($resp.data | ForEach-Object { $_.id }) -join ", "
  Write-Host "Endpoint is LIVE. Models: $ids" -ForegroundColor Green
  Write-Host "Use this in the app's TUTOR_MODEL: pick one of the ids above."
} catch {
  Write-Host "Endpoint not responding yet — start your inference engine, then re-run." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Engine start examples (run one, then re-probe):" -ForegroundColor Cyan
Write-Host '  llama.cpp:  .\llama-server.exe -m model.gguf --host 0.0.0.0 --port ' $Port
Write-Host '  Ollama:     $env:OLLAMA_HOST="0.0.0.0:' + $Port + '"; ollama serve   (OpenAI API at /v1)'
Write-Host '  LM Studio:  enable the local server in the UI, bind 0.0.0.0:' $Port
Write-Host ""
Write-Host "Bind the engine to 0.0.0.0 (not 127.0.0.1) so the LAN can reach it."
