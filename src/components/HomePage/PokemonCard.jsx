import { useEffect, useState } from "react";
import FavoritesSvg from "../../Svgs/FavoritesSvg";

import axios from "axios";
import RedFavoriteSvg from "../../Svgs/RedFavoriteSvg";
import { usePokemon } from './../../hooks/usePokemon';
import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(pokemon.isFavorite);
  const { favoritePokemon, setFavoritePokemon } =usePokemon()
  const navigate = useNavigate()
  useEffect(() => {
    const getImg = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const response = await axios.get(`${pokemon.url}`);
        setImg(response.data.sprites.other.dream_world.front_default);
      } catch (e) {
        console.error("Error fetching image:", e);
      } finally {
        setLoading(false);
      }
    };
    getImg();
  }, [pokemon]);

  const handleFavoriteClick = (pokemon) => {
    if (!isFavorite) {
      setIsFavorite(true);
      setFavoritePokemon([...favoritePokemon, {...pokemon, isFavorite: true}]);
    } else {
      const updatedFavorites = favoritePokemon.filter((p) => p.name !== pokemon.name);
      setIsFavorite(false);
      setFavoritePokemon(updatedFavorites);
    }
  };
  
  const handleDetails = () => {
    // Navigate to the pokemon details page
    navigate(`/pokemon/${pokemon.name}`)
  };
  

  // if (loading)
  //   return (
  //     <div className="flex items-center justify-center mt-10 ">
  //       <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
  //     </div>
  //   );
  

  return (
    <div>
      <div className="flex relative flex-col items-center justify-center p-4 rounded-md bg-white shadow-md ">
        <div className="w-30 h-36 overflow-hidden ">
          {loading ? (
            <div className="flex items-center justify-center mt-10 ">
              <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <img
              className="w-full h-full object-contain"
              src={img}
              alt={pokemon.name}
            />
          )}
        </div>

        <h2 className="mt-1 pt-5 text-xl md:text-3xl custom-gradient font-bold">
          {pokemon.name}
        </h2>
        <div className="flex">
          <button onClick={handleDetails} className=" border-2 border-fuchsia-500 rounded bg-slate-800 hover:bg-slate-500  text-white  text-xs pt-2 pl-2 pr-2">
            View Details
          </button>
          {}
          <div
            className=" ml-4 cursor-pointer  "
            onClick={() => handleFavoriteClick(pokemon)}
          >
            {isFavorite ? <RedFavoriteSvg /> : <FavoritesSvg />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
