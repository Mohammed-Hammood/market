import { createContext } from "react";
import { Theme } from "./model";

type ThemeContextProps = {
    theme: Theme;
    themeToggle: () => void;
}


export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT, themeToggle: () => { } });
