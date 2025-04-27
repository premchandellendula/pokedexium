
const Hero = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto pt-28">
            <img src="/hero-img@2x.png" alt="" className="md:w-[55%] w-[85%] mx-auto" draggable={false}/>
            <h1 className="flex items-center justify-center font-semibold font-poppins lg:text-5xl md:text-4xl sm:text-[1.6rem] text-[1.3rem] text-center mt-4 bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 dark:via-red-400 dark:to-orange-400 text-transparent bg-clip-text">
                Discover the World of 
                <img src="/logo.png" alt="" className="md:w-34 sm:w-22 w-17 ml-2 mb-2" draggable={false}/>
            </h1>
            <p className="lg:w-[70%] w-[95%] mx-auto text-center text-gray-600 text-[0.85rem] sm:text-[1.1rem] md:text-[1.25rem] mt-3">Explore an interactive collection of Pokemon. Filter by type, customize your view, and dive into the fascinating world of these incredible creatures.</p>
        </div>
    )
}

export default Hero