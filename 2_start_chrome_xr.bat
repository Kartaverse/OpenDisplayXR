@echo off

REM Specify the OpenXR configuration file
set XR_RUNTIME_JSON=%~dp0\openxr_monado.json

REM Specify Monado environment variables
REM set P_OVERRIDE_ACTIVE_CONFIG=remote

REM Enable the Qwerty device driver
set P_OVERRIDE_ACTIVE_CONFIG=qwerty
set QWERTY_ENABLE=1
set XRT_DEBUG_GUI=1

REM Resize the Monado Window to fit across a dual monitor extended desktop layout
start "Extended Desktop Resize" %~dp0\bin\extended_desktop_resize.exe

REM Start Chrome with WebXR support enabled
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-features=XRSandbox

pause
