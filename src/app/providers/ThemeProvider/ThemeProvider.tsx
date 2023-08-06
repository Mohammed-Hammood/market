import clsx from 'clsx';
import { createContext, useState, ReactNode } from 'react';

const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;


export interface ThemeContextProps {
    theme: Theme;
    themeToggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ theme: Theme.LIGHT, themeToggle: () => { } });



const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeToggle = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        
        if (setTheme) setTheme(newTheme);
        
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    const defaultValues = {
        theme,
        themeToggle
    }

    return (
        <ThemeContext.Provider value={defaultValues}>
            <div className={clsx(theme, "themeContainer")}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
