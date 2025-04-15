import { createContext, useContext, useEffect, useState } from "react";



const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("Light");
    const AvaliableTheme = ["Light", "Dark", "HighContrast"];
    const handleColorChange = (newtheme) => {
        setTheme(newtheme);
    };

    // Effect to update theme in localStorage and apply to the body when currentTheme changes
    useEffect(() => {
        console.log("currentTheme:", theme);
        console.log(localStorage.getItem("theme"));
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme); // Apply the data-theme attribute to the body
    }, [theme]);



    return (
        <ThemeContext.Provider value={{ theme, AvaliableTheme, handleColorChange }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme }