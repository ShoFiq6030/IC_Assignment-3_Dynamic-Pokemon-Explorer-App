import React from "react";
import PokemonCard from "../components/HomePage/PokemonCard";
import GrideContainer from "../components/common/GrideContainer";

function FavoritesPage() {
  const handlePrevious = () => {
    console.log("Previous page clicked");
  };

  const handleNext = () => {
    console.log("Next page clicked");
  };
  return (
    <div className="min-h-screen">
      <GrideContainer/>
    </div>
  );
}

export default FavoritesPage;
