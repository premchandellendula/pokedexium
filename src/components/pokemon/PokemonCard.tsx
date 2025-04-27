import { Link } from "react-router-dom";

interface PokemonCardProps {
    pokeData: {
        pokemonId: number;
        pokemonName: string;
        weight: number;
        pokemonImg: string;
        types: string[];
    };
}

export const typeColors = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-200",
    fighting: "bg-red-600",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-yellow-800",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
};

const PokemonCard = ({pokeData}: PokemonCardProps) => {
    return (
        <Link to={`/pokemon/${pokeData.pokemonName}`}>
            <div className={`p-4 xl:w-64 lg:w-56 md:w-58 w-64 rounded-lg shadow-lg bg-white dark:bg-gray-900/30 text-center hover:scale-105 transform transition-transform duration-300 overflow-x-hidden`}>
                {pokeData.pokemonImg ? (
                    <img src={pokeData.pokemonImg} alt={pokeData.pokemonName} className="w-44 h-44 mx-auto" />
                ) : (
                    <img src="../../public/game.png" alt="" className="w-36 h-36 mx-auto" />
                )}
                <h2 className="text-[1.2rem] md:text-xl font-bold mt-2 text-gray-800 dark:text-white">{pokeData.pokemonName}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-[0.9rem] md:text-[1rem]">Weight: {pokeData.weight}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {pokeData.types.map((type) => (
                        <span
                            key={type}
                            className={`px-3 py-1 text-[0.8rem] font-semibold text-white rounded-full ${typeColors[type as keyof typeof typeColors] || "bg-gray-500"}`}
                        >
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default PokemonCard