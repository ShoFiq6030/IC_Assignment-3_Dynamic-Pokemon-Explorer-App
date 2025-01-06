import React, { useEffect } from 'react'
import FavoritesSvg from '../Svgs/FavoritesSvg'
import { useParams } from 'react-router-dom'

import { axios } from 'axios';

function PokemonPage() {
  const pName=useParams()
  useEffect(()=>{
    const fetchPokemonData = async()=>{
      

    }

  },[])


  return (
    <div>

      <h2>Pokemon Details</h2>
      <h3>Name</h3>
      <FavoritesSvg/>
      <div></div>
      <img src="" alt="" />
      <div>Abilities</div>
      <div>Types</div>
      <div>Base stats</div>


    </div>
  )
}

export default PokemonPage