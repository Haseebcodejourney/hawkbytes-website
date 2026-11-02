export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "hawk-theme";

export const themeBootScript = `try{if(localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})==="light"){document.documentElement.setAttribute("data-theme","light");}}catch(e){}`;
