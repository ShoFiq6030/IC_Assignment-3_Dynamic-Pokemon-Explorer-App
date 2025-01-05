import { useContext } from "react";
import PokemonContext from "../context/context";

const usePokemon = () => {
    const { pokemon, setPokemon } = useContext(PokemonContext);
    
    return { pokemon, setPokemon };
}