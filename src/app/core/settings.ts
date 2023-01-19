export interface AppSettings
{
    navPos: 'side' | 'top';
    dir: 'ltr' | 'rtl';
    theme: 'light' | 'dark' | 'auto';
    showHeader: boolean;
    headerPos: 'fixed' | 'static' | 'above';
    showUserPaned: boolean;
    sidenavOpened: boolean;
    sidenavCollapsed: boolean;
    language: string;
}
export const defaults: AppSettings = {
    navPos: 'side',
    dir: 'ltr',
    theme: 'auto',
    showHeader: true,
    headerPos: "fixed",
    showUserPaned: true,
    sidenavOpened: true,
    sidenavCollapsed: false,
    language: "en-US"
}