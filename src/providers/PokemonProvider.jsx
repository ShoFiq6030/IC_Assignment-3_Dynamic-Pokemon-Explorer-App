import React, { useState } from 'react'
import PokemonContext from "../context/context";

function PokemonProvider({children}) {
    const [allPokemon, setAllPokemon] = useState([]);
  return (
    <PokemonContext.Provider value={{ allPokemon, setAllPokemon }}>
        {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider