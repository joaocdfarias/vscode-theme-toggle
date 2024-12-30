# Visual Studio Code Theme Toggle

Simple Visual Studio Code extension for toggling between dark and light themes from the status bar or running the command `Toggle VS Code Theme`.

## ⚠️ Prerequisites

1. Set a preferred dark color scheme (`workbench.preferredDarkColorTheme`);
2. Set a preferred light color scheme (`workbench.preferredLightColorTheme`);
3. Disable the **Auto Detect Color Scheme Option** (`window.autoDetectColorScheme`);

**Don't worry! The extension itself will guide you to disable the "Auto Detect Color Scheme" option 😊.**

## 🤔 How to

By default VS Code sets "Default Dark Modern" for preferred dark color scheme and "Default Light Modern" for preferred light color scheme. So, if you have another theme in mind to use as dark/light you can change in the user settings. Here's a step-by-step guide:

1. Go to user settings by pressing `Ctrl + Shift + P` and type: "Open User Settings" (should have ">" at the beginning);
2. At the **Search settings** bar, search by `workbench.preferredDarkColorTheme` and set you preferred dark color theme;
3. After that you can search by `workbench.preferredLightColorTheme` to set you preferred light color theme;

With both themes being set, you can you the extension properly by toggling it on the status bar or running the command `Toggle VS Code Theme` by using the keystroke `Ctrl + Shift + P`.