@echo off

REM Specify the OpenXR configuration file
set XR_RUNTIME_JSON=%~dp0\openxr_monado.json

REM Specify Monado environment variables
REM set P_OVERRIDE_ACTIVE_CONFIG=remote

REM Enable the Qwerty device driver
set P_OVERRIDE_ACTIVE_CONFIG=qwerty
set QWERTY_ENABLE=1
set XRT_DEBUG_GUI=1

REM Launch the Mondao Remote Control GUI used to adjust the OpenXR camera view
%~dp0\bin\monado-gui.exe

pause