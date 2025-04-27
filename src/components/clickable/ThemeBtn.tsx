import { useTheme } from "../../pages/other/ThemeProvider";

const ThemeBtn = () => {
    const {theme, lightTheme, darkTheme} = useTheme();

    const onChangeBtn = () => {
        console.log(theme)
        if(theme === "light"){
            darkTheme()
        }

        if(theme === "dark"){
            lightTheme()
        }
    }
    return (
        <div onClick={onChangeBtn} className={`rounded-full p-2 mr-2 flex justify-center items-center cursor-pointer ${theme === "light" ? "hover:bg-gray-200/30" : "bg-gray-800/50 hover:bg-blue-950/65"}`}>
            {theme === "light" ? (
                <i className="bx bxs-sun text-yellow-400 text-[1.1rem] md:text-[1.3rem]"></i>
            ) : (
                <i className="bx bxs-moon text-blue-200 text-[1.1rem] md:text-[1.3rem]"></i>
            )}
        </div>
    )
}

export default ThemeBtn