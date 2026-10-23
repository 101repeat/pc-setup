# PC Setup Backup Script
# Копирует кастомные конфиги/данные в репозиторий и коммитит изменения

$Repo = "C:\Users\}repeat\Documents\pc-setup"
$ErrorActionPreference = "SilentlyContinue"

Set-Location $Repo

function Copy-IfExists {
    param([string]$Source, [string]$Dest)
    if (Test-Path $Source) {
        $d = Split-Path $Dest -Parent
        if (-not (Test-Path $d)) { New-Item -ItemType Directory -Force -Path $d | Out-Null }
        try {
            Copy-Item -Path $Source -Destination $Dest -Recurse -Force -ErrorAction Stop
            Write-Host "OK: $Source -> $Dest"
        } catch {
            Write-Host "ERR: $Source -> $Dest $_"
        }
    } else {
        Write-Host "SKIP: $Source (not found)"
    }
}

Write-Host "=== Backing up PC customizations ==="

# Windhawk
Copy-IfExists "C:\Program Files\Windhawk\windhawk.ini" "$Repo\windhawk\windhawk.ini"
Copy-IfExists "C:\Program Files\Windhawk\AppData\ModsSource" "$Repo\windhawk\AppData\ModsSource"
Copy-IfExists "C:\Program Files\Windhawk\AppData\Local" "$Repo\windhawk\AppData\Local"
Copy-IfExists "C:\Program Files\Windhawk\AppData\settings.ini" "$Repo\windhawk\AppData\settings.ini"
Copy-IfExists "C:\Program Files\Windhawk\AppData\userprofile.json" "$Repo\windhawk\AppData\userprofile.json"

# Stream Dock AJAZZ
Copy-IfExists "$env:APPDATA\HotSpot\StreamDock\profiles" "$Repo\streamdock\profiles"
Copy-IfExists "$env:APPDATA\HotSpot\StreamDock\config" "$Repo\streamdock\config"
Copy-IfExists "$env:APPDATA\HotSpot\StreamDock\plugins" "$Repo\streamdock\plugins"
Copy-IfExists "$env:APPDATA\HotSpot\StreamDock\space" "$Repo\streamdock\space"
Copy-IfExists "$env:APPDATA\HotSpot\StreamDock\audio" "$Repo\streamdock\audio"

# PowerToys
Copy-IfExists "$env:LOCALAPPDATA\Microsoft\PowerToys\settings.json" "$Repo\powertoys\settings.json"
Copy-IfExists "$env:LOCALAPPDATA\Microsoft\PowerToys\FancyZones" "$Repo\powertoys\FancyZones"
Copy-IfExists "$env:LOCALAPPDATA\Microsoft\PowerToys\Keyboard Manager" "$Repo\powertoys\Keyboard Manager"
Copy-IfExists "$env:LOCALAPPDATA\Microsoft\PowerToys\PowerToys Run" "$Repo\powertoys\PowerToys Run"
Copy-IfExists "$env:LOCALAPPDATA\Microsoft\PowerToys\Workspaces" "$Repo\powertoys\Workspaces"

# ShareX
Copy-IfExists "$env:APPDATA\ShareX" "$Repo\sharex\ShareX"
# Documents\ShareX is huge; copy everything except screenshots
$sharexDocs = "$env:USERPROFILE\Documents\ShareX"
if (Test-Path $sharexDocs) {
    $sharexDest = "$Repo\sharex\DocumentsShareX"
    if (-not (Test-Path $sharexDest)) { New-Item -ItemType Directory -Force -Path $sharexDest | Out-Null }
    robocopy $sharexDocs $sharexDest /E /XD "$sharexDocs\Screenshots" "$sharexDocs\Tools" /NFL /NDL /NJH /NJS /NP | Out-Null
    Write-Host "OK: $sharexDocs -> $sharexDest (excluding Screenshots and Tools)"
} else {
    Write-Host "SKIP: $sharexDocs (not found)"
}

# OpenCode
Copy-IfExists "$env:USERPROFILE\.config\opencode" "$Repo\opencode\config"
Copy-IfExists "$env:USERPROFILE\.local\share\opencode\auth.json" "$Repo\opencode\auth.json"
Copy-IfExists "$env:USERPROFILE\.local\share\opencode\opencode.db" "$Repo\opencode\opencode.db"  # large, but useful to have snapshot

# AutoHotkey
Copy-IfExists "$env:USERPROFILE\Documents\AutoHotkey" "$Repo\autohotkey\DocumentsAutoHotkey"
Copy-IfExists "C:\Program Files\AutoHotkey\AutoHotkey.ini" "$Repo\autohotkey\AutoHotkey.ini"
Copy-IfExists "C:\Program Files (x86)\AutoHotkey\AutoHotkey.ini" "$Repo\autohotkey\AutoHotkey.ini.x86"

# Punto Switcher
Copy-IfExists "$env:APPDATA\Punto Switcher" "$Repo\punto\Punto Switcher"

# System info
$info = @()
$info += "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
$info += "Computer: $env:COMPUTERNAME"
$info += "User: $env:USERNAME"
$info += ""
$info += "=== Installed Programs ==="
Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*, HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*, HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName } | Sort-Object DisplayName | ForEach-Object { $info += "$($_.DisplayName) - $($_.DisplayVersion)" }
$info += ""
$info += "=== Autostart (Run) ==="
Get-ItemProperty HKCU:\Software\Microsoft\Windows\CurrentVersion\Run -ErrorAction SilentlyContinue | Get-Member -MemberType NoteProperty | Where-Object { $_.Name -notmatch "^PS" } | ForEach-Object { $name = $_.Name; $val = (Get-ItemProperty HKCU:\Software\Microsoft\Windows\CurrentVersion\Run).$name; $info += "$name = $val" }
$info += ""
$info += "=== Startup folder ==="
Get-ChildItem "$env:APPDATA\Microsoft\Windows\Start Menu\Programs\Startup" -Force -ErrorAction SilentlyContinue | ForEach-Object { $info += $_.Name }
$info | Out-File -FilePath "$Repo\docs\system-info.txt" -Encoding UTF8

Write-Host "=== Git commit ==="
git add -A
$changes = git diff --cached --name-only
if ($changes) {
    $msg = "Backup $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $msg
    Write-Host "Committed: $msg"
} else {
    Write-Host "No changes to commit"
}
Write-Host "=== Done ==="
