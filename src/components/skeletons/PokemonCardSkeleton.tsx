
const PokemonCardSkeleton = () => {
    return (
        <div className={`p-4 xl:w-64 lg:w-56 md:w-58 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-900/30 text-center hover:scale-105 transform transition-transform duration-300 overflow-x-hidden`}>
            <div className="w-36 h-36 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
            <div className="w-44 h-4 bg-gray-300/50 dark:bg-gray-700/40 rounded mb-2" />

            <div className="flex space-x-3">
                <div className="w-20 h-7 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
                <div className="w-20 h-7 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
            </div>
        </div>
    )
}

export default PokemonCardSkeleton