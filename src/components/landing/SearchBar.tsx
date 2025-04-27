import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";

const SearchBar = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    return (
        <div className="flex items-center rounded-full relative md:w-64 w-full bg-gray-200/60 text-gray-800 shadow-inner dark:bg-gray-950 dark:text-gray-200 dark:shadow-md">
            <input onChange={(e) => setName(e.target.value)} type="text" className="rounded-full px-4 md:py-2 py-1 w-full bg-transparent focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-800" placeholder="Enter Pokémon " />
            <span 
            onClick={() => {
                if(name.trim() === ""){
                    toast.warning("Name should not be empty")
                    return
                }
                navigate(`/pokemon/${name}`)
            }}
            className="absolute right-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:size-10 size-9 text-gray-500 dark:text-gray-400 p-2 rounded-r-md flex items-center justify-center cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </span>
        </div>
    )
}

export default SearchBar