
const PokemonSkeleton = () => {
    return (
        <div className="animate-pulse p-8 w-[90%] md:w-[80%] mx-auto mt-10 bg-gray-100 dark:bg-gray-900/40 rounded-xl shadow-md">
            <div className="flex lg:flex-row flex-col items-center justify-center space-y-6">

                <div className="w-full md:w-[35%] flex justify-center items-center">
                    <div className="w-48 h-48 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
                </div>

                {/* Name skeleton */}
                <div className="w-full lg:w-[65%]">
                    <div className="w-44 h-4 bg-gray-300/50 dark:bg-gray-700/40 rounded mb-2" />
                    <div className="w-20 h-3 bg-gray-300/50 dark:bg-gray-700/40 rounded mb-4" />

                    {/* Types skeleton */}
                    <div className="flex space-x-3">
                        <div className="w-20 h-7 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
                        <div className="w-20 h-7 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
                    </div>

                    {/* Stats skeleton */}
                    <div className="w-20 h-3 bg-gray-300/50 dark:bg-gray-700/40 rounded mt-8" />
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
                        {[...Array(6)].map((_, idx) => (
                            <div key={idx} className="h-12 bg-gray-300/50 dark:bg-gray-700/40 rounded" />
                        ))}
                    </div>

                    {/* Abilities skeleton */}
                    <div className="w-20 h-3 bg-gray-300/50 dark:bg-gray-700/40 rounded mt-8" />

                    <div className="w-full flex mt-6 space-x-2">
                        {[...Array(3)].map((_, idx) => (
                            <div key={idx} className="h-7 w-20 bg-gray-300/50 dark:bg-gray-700/40 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonSkeleton