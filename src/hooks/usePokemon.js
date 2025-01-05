import { useContext } from "react";
import PokemonContext from "../context/context";

export const usePokemon = () => {
    const { pokemon, setPokemon } = useContext(PokemonContext);
    
    return { pokemon, setPokemon };
}