import Arrow from '../components/clickable/Arrow'
import Footer from '../components/landing/Footer'
import Hero from '../components/landing/Hero'
import Navbar from '../components/landing/Navbar'
import PokemonGrid from '../components/pokemon/PokemonGrid'

const Landing = () => {
    return (
        <div className='w-full min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-black'>
            <Navbar />
            <Hero />
            <Arrow />
            <PokemonGrid />
            <Footer />
        </div>
    )
}

export default Landing