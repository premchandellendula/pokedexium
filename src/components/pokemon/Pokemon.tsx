import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../landing/Navbar";
import PokemonSkeleton from "../skeletons/PokemonSkeleton";
import Footer from "../landing/Footer";
import { typeColors } from "./PokemonCard";

type RouteParams = {
    pokemonName: string;
};

interface StatObj {
    base_stat: number,
    stat: {
        name: string
    }
}

interface PokemonType {
    id: number,
    name: string,
    img: string,
    stats: StatObj[],
    types: string[],
    abilities: string[]
}

const Pokemon = () => {
    const { pokemonName} = useParams<RouteParams>()
    const [pokemon, setPokemon] = useState<PokemonType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true)
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                const data = response.data
                
                const formattedPokemon: PokemonType = {
                    id: data.id,
                    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
                    img: data.sprites.other['official-artwork'].front_default,
                    stats: data.stats.map((statObj: any) => statObj),
                    types: data.types.map((typeObj: any) => typeObj.type.name),
                    abilities: data.abilities.map((abilityObj: any) => abilityObj.ability.name)
                }
                setPokemon(formattedPokemon);
            }catch(err){
                console.error("Error fetching Pokémon:", err);
                setLoading(false);
            }finally{
                setLoading(false)
            }
        }
        fetchPokemon()
    }, [pokemonName])

    if(loading){
        return (
            <div className="w-full min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
                <Navbar />
                <div className="pt-20">
                    <PokemonSkeleton />
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="w-full min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
            <Navbar />
            <div className="pt-22 w-[90%] md:w-[80%] mx-auto">
                <Link to={'/'}>
                    <button className="dark:text-white flex justify-center items-center rounded-md p-2 bg-gray-100 hover:bg-gray-200/90 dark:bg-gray-900 hover:dark:bg-gray-900/60 cursor-pointer">
                        <i className='bx bx-chevron-left text-[1.3rem] mt-0.5'></i>
                        <span>Back to Gallery</span>
                    </button>
                </Link>
            </div>

            {pokemon ? (
                <div className="w-[90%] md:w-[80%] mx-auto flex lg:flex-row flex-col justify-center items-center gap-4 bg-white dark:bg-gray-900/30 p-8 rounded-md shadow-lg mt-6 border border-gray-200 dark:border-none">
                    <div className=" text-white flex justify-center items-center w-full lg:w-[35%]">
                        <img src={pokemon?.img} alt={pokemon?.name} draggable={false} className="w-72 h-72 md:w-96 md:h-96" />
                    </div>
                    <div className="w-full lg:w-[65%] space-y-8">
                        <div>
                            <h1 className="text-[1.6rem] md:text-5xl font-bold capitalize mb-2 md:mb-4 dark:bg-gradient-to-r dark:from-violet-200 darklto-fuchsia-200 dark:bg-clip-text dark:text-transparent">{pokemon?.name}</h1>
                            <div className="text-[1rem] md:text-[1.25rem] text-gray-500 dark:text-violet-200">#{String(pokemon?.id).padStart(3, '0')}</div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-3 dark:text-violet-200">Types</h2>
                                <div className="flex gap-1.5 md:gap-3">
                                    {pokemon?.types.map((type: any, idx: number) => (
                                        <span
                                            key={idx}
                                            className={`px-4 py-2 rounded-full text-white text-[0.8rem] md:text-sm font-medium capitalize ${
                                                typeColors[type as keyof typeof typeColors]
                                            } hover:scale-105 transition-transform shadow-lg`}
                                            >
                                                {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-3 dark:text-violet-200">Base Stats</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pokemon?.stats.map((stat: any) => (
                                    <div key={stat} className="bg-gray-200/50 hover:bg-gray-200/90 dark:bg-gray-900/40 dark:hover:bg-gray-900/80 p-4 rounded-lg transition-colors backdrop-blur-sm">
                                        <p className="capitalize dark:text-violet-100 text-[0.95rem] md:text-[1rem] mb-1 font-medium">
                                            {stat.stat.name.replace('-', ' ')}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-gray-400 dark:bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-yellow-500 to-red-400"
                                                    style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                                                />
                                                </div>
                                            <span className="text-sm font-semibold dark:text-violet-100">{stat.base_stat}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-3 dark:text-violet-200">Abilities</h2>
                            <div className="flex flex-wrap gap-2">
                                {pokemon?.abilities.map((ability: any) => (
                                    <span
                                    key={ability}
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300/90 dark:bg-white/20 rounded-full text-[0.8rem] md:text-sm capitalize dark:hover:bg-white/30 transition-colors backdrop-blur-sm dark:text-white font-medium shadow-lg">
                                        {ability.replace('-', ' ')}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="text-3xl md:text-4xl font-semibold mt-24 text-center">No Pokemon Found</div>
                    <p className="text-center text-[1.1rem] md:text-xl mt-8">No Pokemon with the name <span className="text-red-600">{pokemonName}</span> </p>
                </>

            )}
            <Footer />
        </div>
    )
}

export default Pokemon