<#
.SYNOPSIS
  Enable the built-in OpenSSH Server on Windows so you can SSH in from your Mac.
.DESCRIPTION
  Run this ONCE, ON the Windows box, in an elevated (Administrator) PowerShell.
  Idempotent: it checks state before changing anything and is safe to re-run.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\enable-openssh.ps1
#>
[CmdletBinding()]
param(
  [int]$SshPort = 22
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
Write-Host "== Enabling OpenSSH Server ==" -ForegroundColor Cyan

# 1. Install the OpenSSH.Server capability if not present.
$cap = Get-WindowsCapability -Online | Where-Object Name -like "OpenSSH.Server*"
if ($cap.State -ne "Installed") {
  Write-Host "Installing OpenSSH.Server capability..."
  Add-WindowsCapability -Online -Name $cap.Name | Out-Null
} else {
  Write-Host "OpenSSH.Server already installed."
}

# 2. Start the service and set it to launch automatically.
Set-Service -Name sshd -StartupType Automatic
if ((Get-Service sshd).Status -ne "Running") {
  Start-Service sshd
  Write-Host "Started sshd."
} else {
  Write-Host "sshd already running."
}

# 3. Firewall rule for inbound SSH.
$ruleName = "OpenSSH-Server-In-TCP-$SshPort"
if (-not (Get-NetFirewallRule -Name $ruleName -ErrorAction SilentlyContinue)) {
  New-NetFirewallRule -Name $ruleName -DisplayName "OpenSSH Server (TCP $SshPort)" `
    -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort $SshPort | Out-Null
  Write-Host "Added firewall rule for TCP $SshPort."
} else {
  Write-Host "Firewall rule for TCP $SshPort already exists."
}

# 4. Make PowerShell the default SSH shell (nicer for remote admin). Optional.
$regPath = "HKLM:\SOFTWARE\OpenSSH"
$pwsh = (Get-Command powershell.exe).Source
New-ItemProperty -Path $regPath -Name DefaultShell -Value $pwsh `
  -PropertyType String -Force | Out-Null

$ip = (Get-NetIPAddress -AddressFamily IPv4 |
       Where-Object { $_.IPAddress -notlike "127.*" } | Select-Object -First 1).IPAddress
Write-Host ""
Write-Host "Done. From your Mac:" -ForegroundColor Green
Write-Host "  ssh $env:USERNAME@$ip"
