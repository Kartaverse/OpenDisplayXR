# Monado for macOS Based OpenXR Virtual Devices 

![image1](Images/monado_for_linux_image1.png)

The open-source [Monado](https://monado.dev/) framework makes it possible to display OpenXR rendered real-time stereoscopic 3D content on a passive stereoscopic 3D monitor like the Schneider Digital [PluraView3D display](https://www.3d-pluraview.com/en/). Monado is cross-platform compatible and works on Windows, Linux, and macOS systems. 

On macOS, the "Displays" system panel lists a PluraView3D display's panel as a "Liyama North America 28" monitor.

# Monado on MacOS

GitHub user Max Thomas has shared a [GitHub Gist tip](https://gist.github.com/shinyquagsire23/3c68aecd872cc7ac21c28e950245dbd2#file-macos_building-txt) on getting monado to run on macOS.

## The Monado for macOS CLI (command-line) executable program is located at:

- /usr/local/bin/monado-cli

## Install the homebrew package manager for macOS

	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	
## Add the macOS build tools and supporting libraries using homebrew

	brew install git cmake ninja eigen sdl2 libusb curl ffmpeg x264 nlohmann-json glfw glm glew capnp libx11 libxrandr libxcb xquartz

## Install the [VulkanSDK](https://vulkan.lunarg.com/sdk/home#mac) for macOS using the SDK Installer

For simplicity, it is likely easiest if you place the SDK files into your home folder:

	$HOME/VulkanSDK/

![VulkanSDK Install 1](Images/macos_vulkan1.png)

![VulkanSDK Install 2](Images/macos_vulkan2.png)

## Download the OpenXR SDK

	{
	git clone https://github.com/KhronosGroup/OpenXR-SDK.git
	cd OpenXR-SDK
	}
	
## Compile OpenXR using Xcode

	{
	cd $HOME/OpenXR-SDK
	mkdir -p build/macos
	cd build/macos
	cmake -G "Xcode" ../..
	xcodebuild -scheme ALL_BUILD build
	}

## Edit your .zshrc file:

	nano $HOME/.zshrc

## Append the following text to the end of your .zshrc file

Update the following .zshrc text snippet to line up with your user account name and the current Vulkan version:

	export VULKAN_SDK=$HOME/VulkanSDK/1.4.304.0/macOS/
	export PATH="$VULKAN_SDK/bin:$PATH"
	export LD_LIBRARY_PATH=$VULKAN_SDK/lib
	export XR_RUNTIME_JSON=$HOME/monado/build/openxr_monado-dev.json


## Compile Monado for macOS

Use the macOS terminal to run the following shell commands:

	{
	git clone --branch macos_ql_merge https://github.com/shinyquagsire23/monado.git
	cd monado && mkdir -p build && cd build
	cmake .. -DXRT_ENABLE_GPL=1 -DXRT_BUILD_DRIVER_EUROC=0 -DXRT_BUILD_DRIVER_NS=0 -DXRT_BUILD_DRIVER_PSVR=0 -DXRT_HAVE_OPENCV=0 -DXRT_HAVE_XCB=0 -DXRT_HAVE_XLIB=0 -DXRT_HAVE_XRANDR=0 -DXRT_HAVE_SDL2=0  -DXRT_HAVE_VT=0 -DXRT_FEATURE_WINDOW_PEEK=0 -DXRT_BUILD_DRIVER_QWERTY=0 -DXRT_BUILD_DRIVER_WMR=0 -DXRT_FEATURE_SERVICE=0 -DXRT_FEATURE_STEAMVR_PLUGIN=0 -DXRT_MODULE_IPC=0
	make
	}

The output from the build process is stored in:

	cd $HOME/monado/build

## Monado Based Simulator OpenXR Display Canvas Resolution

If you want to change the default resolution of a Monado OpenXR HMD screen, you can edit the following lines of code in the file named "r\_hmd.c":

	// Setup info.
	struct u_device_simple_info info;
	info.display.w_pixels = 3840*2;
	info.display.h_pixels = 2160;


