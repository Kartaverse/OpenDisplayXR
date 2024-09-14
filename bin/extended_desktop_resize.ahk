#Requires AutoHotkey v2.0
#SingleInstance

; Resize the Monado window to fit across a dual monitor extended desktop configuration
WinWait("ahk_class Monado")
VirtualScreenWidth := SysGet(78)
VirtualScreenHeight := SysGet(79)
WinMove 0, 0, VirtualScreenWidth, VirtualScreenHeight, "ahk_class Monado"
