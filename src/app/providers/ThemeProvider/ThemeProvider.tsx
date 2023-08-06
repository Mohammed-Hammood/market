import { createContext, useState, ReactNode } from 'react';

const __LocalStorageName__ = 'theme';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const defaultTheme = localStorage.getItem(__LocalStorageName__) as Theme || Theme.LIGHT;


export interface ThemeContextProps {
    theme: Theme;
    themeToggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT, themeToggle: () => { } });


const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    if(localStorage) {
        document.body.setAttribute("data-theme", theme);
    }

    const themeToggle = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        
        if (setTheme) setTheme(newTheme);
        
        localStorage.setItem(__LocalStorageName__, newTheme);
    };

    const defaultValues = {
        theme,
        themeToggle
    }

    return (
        <ThemeContext.Provider value={defaultValues}>
                {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
