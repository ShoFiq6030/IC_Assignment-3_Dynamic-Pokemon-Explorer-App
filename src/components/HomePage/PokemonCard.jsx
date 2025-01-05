import React from "react";

function PokemonCard() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 rounded-md bg-white shadow-md ">
        <img
          className="w-24 h-24 border border-"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt="Pikachu"
        />
        <h2 className="mt-1 pt-5 text-xl md:text-3xl custom-gradient font-bold">
          Pikachu
        </h2>
        <button className=" border border-fuchsia-500 rounded bg-slate-800 hover:bg-slate-500  text-white  text-xs pt-2 pl-2 pr-2">
          View Details
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;
