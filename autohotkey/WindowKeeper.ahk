; ============================================================
;  WindowKeeper — запоминает позиции окон по процессу
;  и восстанавливает их при следующем открытии / после ребута.
;
;  AHK v1.1 (Unicode). Запуск: AutoHotkey.exe WindowKeeper.ahk
;  Горячая клавиша паузы: Win+Alt+W
;  Данные:  windowkeeper.dat   (позиции)
;  Настройки: WindowKeeper.ini
;  Лог:     windowkeeper.log
; ============================================================
#NoEnv
#SingleInstance Force
#Persistent
#MaxThreadsPerHotkey 2
SendMode Input
SetWorkingDir %A_ScriptDir%
SetBatchLines -1
CoordMode, Mouse, Screen

; Физические пиксели (корректно для 125%/150% масштаба и разных DPI мониторов)
DllCall("SetProcessDPIAware")

global DataFile    := A_ScriptDir . "\windowkeeper.dat"
global LogFile     := A_ScriptDir . "\windowkeeper.log"
global ConfigFile  := A_ScriptDir . "\WindowKeeper.ini"

global Enabled        := 1
global PollMs         := 400
global RestoreDelay   := 500
global IgnoreExes     := {}
global Slots          := {}   ; exe -> массив "x|y|w|h|state"
global Assigned       := {}   ; hwnd -> {exe, slot, pend, pendCount, skipUntil, attempts}
global PendingRestore := []
global Dirty          := false
global SaveTick       := 0

ReadConfig()
LoadData()

Menu, Tray, NoStandard
Menu, Tray, Add, Пауза / Продолжить, ToggleEnabled
Menu, Tray, Add, Открыть лог, OpenLog
Menu, Tray, Add, Открыть настройки, OpenConfig
Menu, Tray, Add, Перезапустить, ReloadScript
Menu, Tray, Add, Выход, Quit
Menu, Tray, Default, Открыть лог
Menu, Tray, Tip, WindowKeeper — позиции окон (%Enabled%)

Log("=== start, exes=" . Slots.MaxIndex() . " ===")
SetTimer, Scan, %PollMs%
SetTimer, FlushData, 3000
OnExit, Quit

ToggleEnabled:
    Enabled := !Enabled
    Menu, Tray, Tip, WindowKeeper — позиции окон (%Enabled%)
    Log("enabled=" . Enabled)
    TrayTip, WindowKeeper, % (Enabled ? "Слежение включено" : "Слежение на паузе"), 2
return

#!w::ToggleEnabled

OpenLog:
    Run, notepad.exe "%LogFile%"
return

OpenConfig:
    Run, notepad.exe "%ConfigFile%"
return

ReloadScript:
    Reload
return

Quit:
    SaveData()
    ExitApp

; ------------------------------------------------------------
;  Настройки и данные
; ------------------------------------------------------------
ReadConfig() {
    global ConfigFile, IgnoreExes, PollMs, RestoreDelay, Enabled
    if !FileExist(ConfigFile) {
        content := "[settings]`r`nenabled=1`r`npoll_ms=400`r`nrestore_delay_ms=500`r`n`r`n"
        . "[ignore]`r`n"
        . "exes=explorer.exe,applicationframehost.exe,searchhost.exe,startmenuexperiencehost.exe,"
        . "shellexperiencehost.exe,textinputhost.exe,lockapp.exe,dwm.exe,windhawk.exe`r`n"
        FileDelete, %ConfigFile%
        FileAppend, %content%, %ConfigFile%, UTF-8
    }
    IniRead, v, %ConfigFile%, settings, enabled, 1
    Enabled := (v = "1")
    IniRead, v, %ConfigFile%, settings, poll_ms, 400
    PollMs := Max(150, v + 0)
    IniRead, v, %ConfigFile%, settings, restore_delay_ms, 500
    RestoreDelay := Max(0, v + 0)
    IniRead, list, %ConfigFile%, ignore, exes, %A_Space%
    Loop, Parse, list, `,
    {
        e := Trim(A_LoopField)
        if (e != "")
            IgnoreExes[e] := 1
    }
}

LoadData() {
    global DataFile, Slots
    Slots := {}
    if !FileExist(DataFile)
        return
    Loop, Read, %DataFile%
    {
        line := A_LoopReadLine
        if (line = "" || SubStr(line, 1, 1) = ";")
            continue
        f := StrSplit(line, "`t")
        if (f.MaxIndex() < 2)
            continue
        exe := f[1]
        if !IsObject(Slots[exe])
            Slots[exe] := []
        Slots[exe].Push(f[2])
    }
}

SaveData() {
    global DataFile, Slots, Dirty
    if (!Dirty)
        return
    out := "; WindowKeeper data (exe<TAB>x|y|w|h|state) — можно править вручную`r`n"
    for exe, arr in Slots {
        for i, slot in arr
            out .= exe . "`t" . slot . "`r`n"
    }
    FileDelete, %DataFile%
    FileAppend, %out%, %DataFile%, UTF-8
    Dirty := false
    Log("saved " . Slots.MaxIndex() . " exes")
}

FlushData:
    SaveData()
return

; ------------------------------------------------------------
;  Основной цикл
; ------------------------------------------------------------
Scan:
    if (!Enabled)
        return
    WinGet, wlist, List
    Loop, %wlist%
    {
        hwnd := wlist%A_Index%
        if !DllCall("IsWindowVisible", "Ptr", hwnd)
            continue
        WinGet, cls, Class, ahk_id %hwnd%
        if (cls = "Progman" || cls = "WorkerW" || cls = "Shell_TrayWnd"
            || cls = "Shell_SecondaryTrayWnd" || cls = "ApplicationFrameWindow"
            || cls = "#32770" || cls = "TaskListThumbnailWnd")
            continue
        WinGetTitle, title, ahk_id %hwnd%
        if (title = "")
            continue
        WinGet, exe, ProcessName, ahk_id %hwnd%
        if (exe = "")
            continue
        StringLower, exe, exe
        if (IgnoreExes[exe])
            continue
        WinGet, style, Style, ahk_id %hwnd%
        if (!(style & 0x00C00000) && !(style & 0x00040000))   ; нет заголовка и не resizable
            continue
        WinGet, exStyle, ExStyle, ahk_id %hwnd%
        if (exStyle & 0x00000080)                            ; WS_EX_TOOLWINDOW
            continue
        WinGetPos, x, y, w, h, ahk_id %hwnd%
        if (w < 40 || h < 40)
            continue
        if IsFullscreen(hwnd, x, y, w, h)                     ; игры/фуллскрин не трогаем
            continue
        WinGet, mm, MinMax, ahk_id %hwnd%
        if (mm = 2)                                           ; свёрнутые
            continue
        state := (mm = 1) ? 1 : 0

        a := Assigned[hwnd]
        if IsObject(a) {
            if (A_TickCount < a.skipUntil)
                continue
            slot := Slots[a.exe][a.slot]
            if (slot = "")
                continue
            if RectNear(x, y, w, h, slot) {
                a.pend := ""
                a.pendCount := 0
                continue
            }
            ; окно сдвинули/растянули руками -> запоминаем после стабилизации
            cur := x . "|" . y . "|" . w . "|" . h . "|" . state
            if (a.pend = cur)
                a.pendCount += 1
            else {
                a.pend := cur
                a.pendCount := 1
            }
            if (a.pendCount >= 2) {
                Slots[a.exe][a.slot] := cur
                Dirty := true
                a.pend := ""
                a.pendCount := 0
                Log("learn " . exe . " -> " . cur)
            }
            continue
        }

        ; новое окно
        idx := FindSlotByRect(exe, hwnd, x, y, w, h)
        if (idx) {
            Assigned[hwnd] := {exe: exe, slot: idx, pend: "", pendCount: 0
                             , skipUntil: A_TickCount + 1500, attempts: 1}
            continue
        }
        idx := FindFreeSlot(exe, hwnd)
        if (idx) {
            Assigned[hwnd] := {exe: exe, slot: idx, pend: "", pendCount: 0
                             , skipUntil: A_TickCount + 2500, attempts: 0}
            PendingRestore.Push(hwnd)
            Log("restore-queue " . exe . " slot " . idx)
            continue
        }
        ; мест нет — учим новую позицию
        AddSlot(exe, x, y, w, h, state)
        Assigned[hwnd] := {exe: exe, slot: Slots[exe].MaxIndex(), pend: "", pendCount: 0
                         , skipUntil: A_TickCount + 1500, attempts: 1}
    }
    if (PendingRestore.MaxIndex() > 0)
        SetTimer, RestorePending, -%RestoreDelay%
return

RestorePending:
    queue := PendingRestore
    PendingRestore := []
    for i, hwnd in queue
        DoRestore(hwnd)
return

; ------------------------------------------------------------
;  Работа с позициями
; ------------------------------------------------------------
FindFreeSlot(exe, hwnd) {
    global Slots, Assigned
    arr := Slots[exe]
    if !IsObject(arr)
        return 0
    used := {}
    for h, a in Assigned {
        if (a.exe = exe && a.slot > 0 && DllCall("IsWindow", "Ptr", h))
            used[a.slot] := 1
    }
    Loop, % arr.MaxIndex() {
        if (!used[A_Index])
            return A_Index
    }
    return 0
}

FindSlotByRect(exe, hwnd, x, y, w, h) {
    global Slots, Assigned
    arr := Slots[exe]
    if !IsObject(arr)
        return 0
    used := {}
    for hh, a in Assigned {
        if (a.exe = exe && a.slot > 0 && DllCall("IsWindow", "Ptr", hh))
            used[a.slot] := 1
    }
    Loop, % arr.MaxIndex() {
        if (used[A_Index])
            continue
        if RectNear(x, y, w, h, arr[A_Index])
            return A_Index
    }
    return 0
}

AddSlot(exe, x, y, w, h, state) {
    global Slots, Dirty
    if !IsObject(Slots[exe])
        Slots[exe] := []
    arr := Slots[exe]
    cur := x . "|" . y . "|" . w . "|" . h . "|" . state
    Loop, % arr.MaxIndex() {
        if RectNear(x, y, w, h, arr[A_Index])
            return
    }
    if (arr.MaxIndex() >= 8)
        arr.RemoveAt(1)
    arr.Push(cur)
    Dirty := true
    Log("new slot " . exe . " -> " . cur)
}

DoRestore(hwnd) {
    global Slots, Assigned
    if !DllCall("IsWindow", "Ptr", hwnd)
        return
    a := Assigned[hwnd]
    if !IsObject(a)
        return
    arr := Slots[a.exe]
    if !IsObject(arr)
        return
    slot := arr[a.slot]
    if (slot = "")
        return
    f := StrSplit(slot, "|")
    if (f.MaxIndex() < 5)
        return
    x := f[1] + 0, y := f[2] + 0, w := f[3] + 0, h := f[4] + 0, st := f[5] + 0
    if (w < 40 || h < 40)
        return
    WinGetPos, cx, cy, cw, ch, ahk_id %hwnd%
    if IsFullscreen(hwnd, cx, cy, cw, ch)
        return
    WinGet, mm, MinMax, ahk_id %hwnd%
    if (mm = 1)
        WinRestore, ahk_id %hwnd%
    WinMove, ahk_id %hwnd%, , x, y, w, h
    if (st = 1)
        WinMaximize, ahk_id %hwnd%
    a.skipUntil := A_TickCount + 2500
    WinGetPos, nx, ny, nw, nh, ahk_id %hwnd%
    if (!RectNear(nx, ny, nw, nh, slot) && a.attempts < 1) {
        a.attempts += 1
        PendingRestore.Push(hwnd)
    } else {
        Log("restored " . a.exe . " slot " . a.slot)
    }
}

RectNear(x, y, w, h, slot) {
    f := StrSplit(slot, "|")
    if (f.MaxIndex() < 5)
        return false
    return (Abs(x - f[1]) <= 6 && Abs(y - f[2]) <= 6 && Abs(w - f[3]) <= 6 && Abs(h - f[4]) <= 6)
}

IsFullscreen(hwnd, x, y, w, h) {
    hMon := DllCall("MonitorFromWindow", "Ptr", hwnd, "UInt", 2, "Ptr")
    VarSetCapacity(mi, 40, 0)
    NumPut(40, mi, 0, "UInt")
    if !DllCall("GetMonitorInfo", "Ptr", hMon, "Ptr", &mi)
        return false
    ml := NumGet(mi, 4, "Int"),  mt := NumGet(mi, 8, "Int")
    mr := NumGet(mi, 12, "Int"), mb := NumGet(mi, 16, "Int")
    return (Abs(x - ml) < 3 && Abs(y - mt) < 3 && Abs(x + w - mr) < 3 && Abs(y + h - mb) < 3)
}

Log(msg) {
    global LogFile
    try {
        FileGetSize, sz, %LogFile%
        if (sz > 524288) {
            FileDelete, %LogFile%.old
            FileMove, %LogFile%, %LogFile%.old
        }
    }
    FormatTime, ts, , yyyy-MM-dd HH:mm:ss
    FileAppend, %ts%  %msg%`r`n, %LogFile%, UTF-8
}
