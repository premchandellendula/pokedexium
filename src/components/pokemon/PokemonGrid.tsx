import { useState } from "react";
import Button from "../clickable/Button";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { toast } from "sonner";

export interface PokemonData {
    pokemonId: number,
    pokemonName: string,
    weight: number,
    pokemonImg: string,
    types: string[]
}

interface PokeListType {
    pokemon: {
        name: string,
        url: string,
    },
    slot: number
}

const PokemonGrid = () => {
    const [count, setCount] = useState<number>(0)
    const [type, setType] = useState<string>("")
    const [data, setData] = useState<PokemonData[]>([])
    const [loading, setLoading] = useState(false)
    const pokemonTypes: string[] = [
        'normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark',  'fairy'
    ];

    return (
        <div className=" mx-auto flex flex-col items-center justify-center gap-4 mt-10">
            <div className="flex flex-col md:flex-row gap-2">
                <select className="w-64 p-2 pl-4 pr-10 appearance-none bg-gray-100 dark:bg-gray-800 dark:text-gray-400 rounded text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-lg" onChange={(e) => setType(e.target.value)}>
                    <option value="">Select a type</option>
                    {pokemonTypes.map(type => (
                        <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                    ))}
                </select>
                <input 
                onChange={(e) => setCount(Number(e.target.value))}
                type="number" min={1} max={21} className="w-64 p-2 rounded bg-gray-100 dark:bg-gray-800 dark:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 shadow-lg" placeholder="Enter the count" />
            </div>
            <div>
                <Button loading={loading} label={"Fetch Pokémon"} onClick={async () => {
                    
                    if(type.trim() === "" && count === 0){
                        toast.warning("Please set the type and count")
                        return
                    }
                    setLoading(true)

                    try{
                        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
                        const pokemons = response.data.pokemon
                        
                        for (let i = pokemons.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [pokemons[i], pokemons[j]] = [pokemons[j], pokemons[i]];
                        }
                        
                        const selectedPokemons = pokemons.slice(0, count)
                        // console.log(selectedPokemons)
                        
                        const promises = selectedPokemons.map(async (poke: PokeListType, idx: number) => {
                            const url = `https://pokeapi.co/api/v2/pokemon/${poke.pokemon.name}`;
                            const { data: pokemonJson } = await axios.get(url);
                
                            return {
                                pokemonId: idx + 1,
                                pokemonName: pokemonJson.name.charAt(0).toUpperCase() + pokemonJson.name.slice(1).toLowerCase(),
                                weight: pokemonJson.weight,
                                pokemonImg: pokemonJson.sprites.other['official-artwork'].front_default,
                                types: pokemonJson.types.map((t: any) => t.type.name)
                            };
                        });
                        
                        const pokemonsData = await Promise.all(promises);
                        setData(pokemonsData)
                    }catch(err){
                        console.log("Error fetching pokemons: ", err)
                        setLoading(false)
                    }finally{
                        setLoading(false)
                    }
                }} />
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 my-6">
                {data.map((pokeData, idx) => (
                    <PokemonCard key={idx} pokeData={pokeData} />
                ))}
            </div>
        </div>
    )
}

export default PokemonGrid