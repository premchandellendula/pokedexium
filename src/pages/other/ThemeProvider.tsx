import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    theme: string;
    darkTheme: () => void;
    lightTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    const darkTheme = () => setTheme("dark");
    const lightTheme = () => setTheme("light");

    useEffect(() => {
        document.querySelector("html")?.classList.remove("dark", "light");
        document.querySelector("html")?.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
