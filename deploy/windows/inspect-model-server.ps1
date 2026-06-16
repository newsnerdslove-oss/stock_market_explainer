<#
.SYNOPSIS
  Report how the local model server is currently running, so it can be wrapped
  as a Windows service. Read-only — changes nothing.
.DESCRIPTION
  Prints the inference process's PID, executable path, full command line, and
  working directory; what owns the inference port; and whether NSSM is present.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\inspect-model-server.ps1 -Port 8082
#>
[CmdletBinding()]
param([int]$Port = 8082)

Write-Output "=== process(es) matching *llama* / *server* on port $Port ==="
$conns = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue
$pids = @($conns | Select-Object -Expand OwningProcess -Unique)
if (-not $pids) { Write-Output "(nothing listening on $Port)" }

foreach ($procId in $pids) {
  $p = Get-CimInstance Win32_Process -Filter "ProcessId=$procId" -ErrorAction SilentlyContinue
  if ($p) {
    Write-Output "PID         : $($p.ProcessId)"
    Write-Output "Name        : $($p.Name)"
    Write-Output "ExePath     : $($p.ExecutablePath)"
    Write-Output "CommandLine : $($p.CommandLine)"
    $owner = Invoke-CimMethod -InputObject $p -MethodName GetOwner -ErrorAction SilentlyContinue
    if ($owner) { Write-Output "RunAsUser   : $($owner.Domain)\$($owner.User)" }
    Write-Output ""
  }
}

Write-Output "=== NSSM present? ==="
$nssm = Get-Command nssm -ErrorAction SilentlyContinue
if ($nssm) { Write-Output "nssm: $($nssm.Source)" } else { Write-Output "nssm: NOT installed" }

Write-Output "=== existing model-related services ==="
Get-Service -ErrorAction SilentlyContinue |
  Where-Object { $_.Name -match 'llama|model|nemotron|nssm' -or $_.DisplayName -match 'llama|model|nemotron' } |
  Format-Table -AutoSize Name, Status, StartType, DisplayName | Out-String | Write-Output

Write-Output "=== winget available (for installing nssm)? ==="
$wg = Get-Command winget -ErrorAction SilentlyContinue
if ($wg) { Write-Output "winget: $($wg.Source)" } else { Write-Output "winget: NOT available" }
