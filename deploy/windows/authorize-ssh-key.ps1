<#
.SYNOPSIS
  Authorize a client SSH public key on this Windows box (OpenSSH server).
.DESCRIPTION
  Writes the given public key to the correct authorized_keys file and fixes ACLs.
  Windows OpenSSH ignores per-user keys for accounts in the Administrators group;
  for those it reads ONLY C:\ProgramData\ssh\administrators_authorized_keys, which
  must be owned by Administrators/SYSTEM with no other access. This handles both
  cases automatically. Idempotent: re-running with the same key is a no-op.

  Run in an ELEVATED PowerShell (needed to write ProgramData for admin accounts).
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\authorize-ssh-key.ps1 -PublicKey "ssh-ed25519 AAAA... comment"
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)][string]$PublicKey
)
$ErrorActionPreference = "Stop"

# Is THIS account a member of the Administrators group? (group SID, not elevation)
$inAdminGroup = (whoami /groups) -match "S-1-5-32-544"

if ($inAdminGroup) {
  $file = Join-Path $env:ProgramData "ssh\administrators_authorized_keys"
} else {
  $dir  = Join-Path $env:USERPROFILE ".ssh"
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  $file = Join-Path $dir "authorized_keys"
}

# Append only if the key isn't already present.
$existing = if (Test-Path $file) { Get-Content $file } else { @() }
if ($existing -contains $PublicKey.Trim()) {
  Write-Host "Key already authorized in $file"
} else {
  Add-Content -Path $file -Value $PublicKey.Trim() -Encoding ascii
  Write-Host "Added key to $file"
}

# Lock down ACLs so sshd will accept the file.
if ($inAdminGroup) {
  icacls $file /inheritance:r /grant "Administrators:F" /grant "SYSTEM:F" | Out-Null
} else {
  icacls $file /inheritance:r /grant "${env:USERNAME}:F" /grant "SYSTEM:F" | Out-Null
}
Write-Host ("Authorized. account=$env:USERNAME  adminGroup={0}  file=$file" -f $inAdminGroup)
