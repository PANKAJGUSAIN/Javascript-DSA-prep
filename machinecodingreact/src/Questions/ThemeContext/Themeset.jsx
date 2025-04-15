import { useTheme } from "./themeContext"



const ThemeSet = () =>{

   const {theme , AvaliableTheme , handleColorChange} = useTheme();


    return (
        <div className={`theme-${theme} h-[200px] w-full bg-amber-700`}>
            <p>Theme - {theme}</p>
            <select onChange={(e) => handleColorChange(e.target.value)} value={theme}>
                {AvaliableTheme.map((themeOption) => (
                    <option key={themeOption} value={themeOption}>
                        {themeOption}
                    </option>
                ))}
            </select>
        </div>
    )

}

export default ThemeSet