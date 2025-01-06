import React from "react";
import PokemonCard from "../components/HomePage/PokemonCard";
import GrideContainer from "../components/common/GrideContainer";
import { usePokemon } from "../hooks/usePokemon";

function FavoritesPage() {
  const handlePrevious = () => {
    console.log("Previous page clicked");
  };

  const handleNext = () => {
    console.log("Next page clicked");
  };
  const {favoritePokemon} = usePokemon()
  return (
    <div className="min-h-screen">
      <GrideContainer pokemons={favoritePokemon}/>
    </div>
  );
}

export default FavoritesPage;
