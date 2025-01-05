import { useEffect, useState } from "react";
import FavoritesSvg from "../../Svgs/FavoritesSvg";
import axios from "axios";

function PokemonCard({ pokemon }) {
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getImg = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${pokemon.url}`);
        setImg(response.data.sprites.other.dream_world.front_default);
      } catch (e) {
        console.error("Error fetching image:", e);
      }
    };
    getImg();
    setLoading(false);
  }, [pokemon]);
  return (
    <div>
      <div className="flex relative flex-col items-center justify-center p-4 rounded-md bg-white shadow-md ">
        {loading ? (
          <p className="text-black text-xl ">Loading...</p>
        ) : (
          <img
            className="w-30 h-30 border border-"
            src={img}
            alt={pokemon.name}
          />
        )}

        <h2 className="mt-1 pt-5 text-xl md:text-3xl custom-gradient font-bold">
          {pokemon.name}
        </h2>
        <div className="flex">
          <button className=" border-2 border-fuchsia-500 rounded bg-slate-800 hover:bg-slate-500  text-white  text-xs pt-2 pl-2 pr-2">
            View Details
          </button>
          <div className=" ml-4 cursor-pointer ">
            <FavoritesSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
