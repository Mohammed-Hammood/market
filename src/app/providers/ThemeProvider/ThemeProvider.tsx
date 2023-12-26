import {  useState, ReactNode } from 'react';
import { ThemeContext } from './context';
import { Theme } from '.';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const __LocalStorageName__ = 'theme';

    const defaultTheme = localStorage.getItem(__LocalStorageName__) as Theme || Theme.LIGHT;
    
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

