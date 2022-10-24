import { createContext, useState } from "react"

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        handleChangeTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider