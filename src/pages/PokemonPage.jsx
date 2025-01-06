import React, { useEffect, useState } from "react";
import FavoritesSvg from "../Svgs/FavoritesSvg";
import { useParams } from "react-router-dom";

import axios from "axios";

function PokemonPage() {
  const [loading, setLoading] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [img, setImg] = useState();
  const { name } = useParams();
  console.log(name);
  useEffect(() => {
    setLoading(true);
    const fetchPokemonData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      console.log(response.data);
      setPokemonData(response?.data);
      setImg(response?.data.sprites.other.dream_world.front_default);
    };
    fetchPokemonData();
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>; // display loading state here  //
  }

  return (
    <div className=" min-h-screen bg-slate-400 m-auto text-center text-xl ">
      <h2 className="text-3xl md:text-6xl pt-10 text-indigo-100 ">Pokemon Details</h2>
      <hr />
      <h3 className="text-2xl md:text-4xl custom-gradient font-bold pt-6">
        {name}
      </h3>
      <FavoritesSvg />
      <div></div>
      <div className="w-60 h-60  m-auto border mb-10">
        <img src={img} alt={name} className="w-full h-full object-contain" />
      </div>

      <hr />

      <div className="flex justify-center items-center pt-10">
        <table className="table-auto border-collapse border text-black border-gray-900 text-xl text-center">
          <thead>
            <tr className="bg-lime-500">
              <th className="border border-gray-900 custom-gradient px-4 py-2 text-2xl">
                Category
              </th>
              <th className="border border-gray-900 px-4 py-2 text-2xl custom-gradient">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-zinc-900">
                Abilities
              </td>
              <td className="border border-gray-900 px-4 py-2">
                {pokemonData?.abilities?.map((ability, index) => (
                  <span key={ability.ability.name}>
                    {ability.ability.name}
                    {index < pokemonData.abilities.length - 1 && ", "}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-zinc-900">
                Types
              </td>
              <td className="border border-gray-900 px-4 py-2">
                {pokemonData?.types?.map((type, index) => (
                  <span key={type.type.name}>
                    {type.type.name}
                    {index < pokemonData.types.length - 1 && ", "}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-900 px-4 py-2 text-zinc-900">
                Stats
              </td>
              <td className="border border-gray-900 px-4 py-2">
                {pokemonData?.stats?.map((stat, index) => (
                  <span key={stat.stat.name} className="block">
                    {stat.stat.name}:{" "}
                    <span className="text-orange-800">{stat.base_stat}</span>
                    {index < pokemonData.stats.length - 1 && " "}
                  </span>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PokemonPage;
