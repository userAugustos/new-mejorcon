import { useEffect, useState } from "react";
export function useTheme() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const localStorageTheme = localStorage.getItem("theme")
        const prefersTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

        if(localStorageTheme === 'dark' || (!localStorageTheme && prefersTheme)) {
            setTheme('dark')
        }
    }, [])

    const toggleTheme = () => {
        if(theme === 'light') {
            localStorage.setItem("theme", "dark");
            setTheme('dark')
            return
        }
        localStorage.setItem('theme', 'light')
        setTheme('light')
    }

    return [theme, toggleTheme]
}
