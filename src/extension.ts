import * as vscode from "vscode";

interface IGetThemes {
  readonly currentTheme: string;
  preferredThemes: {
    light?: string;
    dark?: string;
  };
}

export async function getThemes(): Promise<IGetThemes> {
  const { colorTheme, preferredLightColorTheme, preferredDarkColorTheme } =
    vscode.workspace.getConfiguration("workbench");

  return {
    currentTheme: colorTheme,
    preferredThemes: {
      light: preferredLightColorTheme ?? undefined,
      dark: preferredDarkColorTheme ?? undefined,
    },
  };
}

export async function setThemes(themes: IGetThemes) {
  const hasAutoDetectColorScheme = vscode.workspace
    .getConfiguration("window")
    .get("autoDetectColorScheme");

  if (hasAutoDetectColorScheme) {
    vscode.window.showInformationMessage(
      "Auto Detect Color Scheme is turned on. You should turn this setting off to extension work properly"
    );
    vscode.commands.executeCommand(
      "workbench.action.openSettings",
      "window.autoDetectColorScheme"
    );
    return;
  }

  if (!themes.preferredThemes.dark) {
    vscode.window.showInformationMessage("Dark theme not set");
    vscode.commands.executeCommand(
      "workbench.action.openSettings",
      "workbench.preferredDarkColorTheme"
    );
  }

  if (!themes.preferredThemes.light) {
    vscode.window.showInformationMessage("Light theme not set");
    vscode.commands.executeCommand(
      "workbench.action.openSettings",
      "workbench.preferredLightColorTheme"
    );
  }
}

export async function toggleTheme() {
  vscode.commands.executeCommand("workbench.action.toggleLightDarkThemes");
}

let statusBar: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
  const commandId = "vscode-theme-toggle.toggle";

  context.subscriptions.push(
    vscode.commands.registerCommand(commandId, async () => {
      const themes = await getThemes();
      await setThemes(themes);
      await toggleTheme();
    })
  );

  statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBar.command = commandId;
  statusBar.text = "$(color-mode) Toggle";
  statusBar.show();
  context.subscriptions.push(statusBar);
}

export function deactivate() {}
