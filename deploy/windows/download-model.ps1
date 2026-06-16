<#
.SYNOPSIS
  Download a GGUF (or any large file) to a destination with curl, resumable.
.DESCRIPTION
  Uses Windows' built-in curl.exe: follows redirects, fails on HTTP errors, and
  resumes a partial file (-C -) so a dropped connection can be retried. Safe to
  re-run; an already-complete file is a no-op resume.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\download-model.ps1 `
    -Url https://huggingface.co/.../model.gguf -Dest G:\llama\models\x\model.gguf
#>
[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)][string]$Url,
  [Parameter(Mandatory=$true)][string]$Dest
)
$ErrorActionPreference = "Stop"
$dir = Split-Path $Dest
New-Item -ItemType Directory -Force $dir | Out-Null
Write-Host "Downloading to $Dest"
& curl.exe -L --fail --retry 5 --retry-delay 5 -C - -o $Dest $Url
if ($LASTEXITCODE -ne 0) { throw "curl exited with code $LASTEXITCODE" }
$gb = [math]::Round((Get-Item $Dest).Length / 1GB, 2)
Write-Host "Done. $Dest = $gb GB"
