import { useContext } from "react";
import PokemonContext from "../context/context";

export const usePokemon = () => {
    const { favoritePokemon, setFavoritePokemon } = useContext(PokemonContext);

    return { favoritePokemon, setFavoritePokemon };
}