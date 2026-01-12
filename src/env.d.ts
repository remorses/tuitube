declare global {
  interface ExtensionPreferences {
    downloadPath: string;
    homebrewPath?: string;
    ytdlPath?: string;
    ffmpegPath?: string;
    ffprobePath?: string;
    autoLoadUrlFromClipboard?: boolean;
    autoLoadUrlFromSelectedText?: boolean;
    enableBrowserExtensionSupport?: boolean;
    forceIpv4?: boolean;
  }
}

export {};
