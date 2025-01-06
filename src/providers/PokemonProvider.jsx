import React, { useState } from 'react'
import PokemonContext from "../context/context";

function PokemonProvider({children}) {
    const [favoritePokemon, setFavoritePokemon] = useState([]);
  return (
    <PokemonContext.Provider value={{ favoritePokemon, setFavoritePokemon }}>
        {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider