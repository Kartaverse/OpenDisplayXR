@echo off

REM Create Desktop Shortcuts

REM Change the working directory to the current Monado folder (ex. C:\OpenDisplayXR\)
cd %~dp0\

REM Desktop Items
REM Create a Monado Service shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\Monado Service.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath = (pwd).Path + '/1_start_service.bat'; $S.IconLocation = (pwd).Path + '/share/monado_icon.ico'; $S.Save()

REM Create a Monado Window Resize shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\Monado Window Resize.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath =  (pwd).Path + '/bin/extended_desktop_resize.exe'; $S.IconLocation = (pwd).Path + '/share/monado_icon.ico'; $S.Save()

REM Create a Monado Remote Control shortcut using a Windows Powershell command
REM powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\Monado Remote Control.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath =  (pwd).Path + '/3_start_remote_control.bat'; $S.IconLocation = (pwd).Path + '/share/joystick_icon.ico'; $S.Save()

REM Create a HelloXR Demo shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\HelloXR Demo.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath =  (pwd).Path + '/2_start_hello_xr_demo.bat'; $S.IconLocation = (pwd).Path + '/share/openxr_icon.ico'; $S.Save()

REM Create a ChromeXR shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\Chrome XR.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath =  (pwd).Path + '/2_start_chrome_xr.bat'; $S.IconLocation = (pwd).Path + '/share/chrome_icon.ico'; $S.Save()

REM Create a BlenderXR shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\Blender XR.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath =  (pwd).Path + '/2_start_blender_xr.bat'; $S.IconLocation = (pwd).Path + '/share/blender_icon.ico'; $S.Save()


REM Create a NVIDIA InstantNGP NeRF shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $DesktopPath = $ws.SpecialFolders('Desktop') + '\NVIDIA InstantNGP NeRF.lnk'; $s = $ws.CreateShortcut($DesktopPath); $S.TargetPath =  (pwd).Path + '/2_start_nerf_demo.bat'; $S.IconLocation = (pwd).Path + '/share/nvidia_icon.ico'; $S.Save()

REM Start Menu Items
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') +  '\OpenDisplayXR'; New-Item $StartPath -ItemType directory

REM Create a Monado Service shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') +  '\OpenDisplayXR\Monado Service.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath = (pwd).Path + '/1_start_service.bat'; $S.IconLocation = (pwd).Path + '/share/monado_icon.ico'; $S.Save()

REM Create a Monado Window Resize shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') + '\OpenDisplayXR\Monado Window Resize.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath =  (pwd).Path + '/bin/extended_desktop_resize.exe'; $S.IconLocation = (pwd).Path + '/share/monado_icon.ico'; $S.Save()

REM Create a Monado Remote Control shortcut using a Windows Powershell command
REM powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') + '\OpenDisplayXR\Monado Remote Control.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath =  (pwd).Path + '/3_start_remote_control.bat'; $S.IconLocation = (pwd).Path + '/share/joystick_icon.ico'; $S.Save()

REM Create a HelloXR Demo shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') + '\OpenDisplayXR\HelloXR Demo.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath =  (pwd).Path + '/2_start_hello_xr_demo.bat'; $S.IconLocation = (pwd).Path + '/share/openxr_icon.ico'; $S.Save()

REM Create a ChromeXR Demo shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') + '\OpenDisplayXR\Chrome XR.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath =  (pwd).Path + '/2_start_chrome_xr.bat'; $S.IconLocation = (pwd).Path + '/share/chrome_icon.ico'; $S.Save()

REM Create a BlenderXR Demo shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') + '\OpenDisplayXR\Blender XR.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath =  (pwd).Path + '/2_start_blender_xr.bat'; $S.IconLocation = (pwd).Path + '/share/blender_icon.ico'; $S.Save()

REM Create a NVIDIA InstantNGP NeRF shortcut using a Windows Powershell command
powershell.exe -ExecutionPolicy Bypass -NoLogo -NonInteractive -NoProfile -Command $ws = New-Object -ComObject WScript.Shell; $StartPath = $ws.SpecialFolders('Programs') + '\OpenDisplayXR\NVIDIA InstantNGP NeRF.lnk'; $s = $ws.CreateShortcut($StartPath); $S.TargetPath =  (pwd).Path + '/2_start_nerf_demo.bat'; $S.IconLocation = (pwd).Path + '/share/nvidia_icon.ico'; $S.Save()


