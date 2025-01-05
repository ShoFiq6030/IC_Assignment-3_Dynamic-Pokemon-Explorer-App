import React from "react";
import PokemonCard from "../HomePage/PokemonCard";

function GrideContainer({ pokemons, page, limit, setPage }) {
  const totalPages = Math.ceil(pokemons?.length / limit);
  const startIndex = (page - 1) * limit;
  const currentPokemons = pokemons?.slice(startIndex, startIndex + limit);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="bg-slate-500 rounded p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {currentPokemons?.map((pokemon, index) => (
          <div key={index} className="p-4 text-white rounded">
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePrevious}
          className="px-3 py-2 border border-white text-white rounded hover:custom-gradient focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="mx-4 text-white">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="px-3 py-2 border border-white text-white rounded hover:custom-gradient focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GrideContainer;
