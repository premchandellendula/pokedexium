interface buttonProps {
    label: string,
    onClick: () => void,
    loading: boolean
}

const Button = ({label, onClick, loading} : buttonProps) => {
    return (
        <button onClick={onClick} className="flex items-center justify-center px-6 py-2 w-40 min-h-10 rounded-full font-semibold shadow-md bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white
            hover:from-yellow-500 hover:via-orange-500 hover:to-red-500
            transition-all duration-300 ease-in-out cursor-pointer mt-4">
                {loading ? (
                    <img src="/pokeball.png" alt="" className="animate-spin w-6 " />
                ) : (
                    label                    
                )}
        </button>
    )
}

export default Button