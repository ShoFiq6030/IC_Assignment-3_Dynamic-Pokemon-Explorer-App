import React, { useState } from 'react'
import PokemonContext from "../context/context";

function PokemonProvider({children}) {
    const [pokemon, setPokemon] = useState([]);
  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
        {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider