@echo off

REM Specify the OpenXR configuration file
set XR_RUNTIME_JSON=%~dp0\openxr_monado.json

REM Specify Monado environment variables
set P_OVERRIDE_ACTIVE_CONFIG=remote

REM Resize the Monado Window to fit across a dual monitor extended desktop layout
start "Extended Desktop Resize" %~dp0\bin\extended_desktop_resize.exe

REM Start the NVIDIA Instant-NGP NeRF App
C:\Instant-NGP\instant-ngp.exe --vr C:\Instant-NGP\data\nerf\fox
REM C:\Instant-NGP\instant-ngp.exe --vr C:\Instant-NGP\data\nerf\fox\transforms_base.ingp

pause
