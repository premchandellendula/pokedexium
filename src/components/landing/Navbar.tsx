import { useState } from "react"
import { useBlurIn } from "../../pages/utils/animation"

import { Link } from "react-router-dom"
import ThemeBtn from "../clickable/ThemeBtn"
import SearchBar from "./SearchBar"

const Navbar = () => {
    const blurIn = useBlurIn(300)
    const [showSearch, setShowSearch] = useState(false)
    return (

        <div className={`fixed top-3 left-1/2 -translate-x-1/2 flex justify-between items-center px-4 py-2 w-[90%] md:w-[80%] shadow-md rounded-full ring-1 ring-black/5 transition-all duration-500 ${blurIn} backdrop-blur-md bg-white/60 dark:bg-gradient-to-r dark:from-gray-900 dark:via-black/90 dark:to-[#0a0b10]/90 z-100`}>
            {showSearch ? (
                    <div className='flex items-center w-full md:h-12'>
                        <button 
                        onClick={() => setShowSearch(false)}
                        className='text-gray-500 dark:text-gray-300 mr-2 cursor-pointer'>
                            <i className="bx bx-arrow-back text-2xl pt-1"></i>
                        </button>

                        <SearchBar />
                    </div>
                ) : (
                    <>
                        <Link to={'/'}>
                            <div className="flex justify-center items-center gap-1">
                                <img src="/icon.png" alt="" className="md:w-12 sm:w-9 w-8" />
                                <span className="md:text-2xl sm:text-[1.2rem] text-[1rem] font-semibold text-gray-900 font-poppins dark:text-yellow-300">
                                    Poké<span className="text-red-500 dark:text-red-400">Dexium</span>
                                </span>
                            </div>
                        </Link>
                        <div className="flex gap-2">
                            <div className="hidden md:block">
                                <SearchBar />
                            </div>
                            <div className="flex md:gap-2 gap-1">
                                <button onClick={() => setShowSearch(true)} className="md:hidden flex justify-center items-center cursor-pointer">
                                    <i className="bx bx-search md:text-3xl text-xl text-gray-500 mt-0.5"></i>
                                </button>
                                <ThemeBtn />
                            </div>
                        </div>
                    </>
            )}
        </div>
    )
}

export default Navbar