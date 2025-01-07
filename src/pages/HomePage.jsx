import { useEffect, useState } from "react";
import Sort from "../components/HomePage/Sort";
import Filter from "../components/HomePage/Filter";
import SearchSvg from "./../Svgs/SearchSvg";

import GrideContainer from "../components/common/GrideContainer";
import axios from "axios";
import { usePokemon } from "../hooks/usePokemon";

function HomePage() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { favoritePokemon, setFavoritePokemon } = usePokemon();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=50`
        );
        // console.log(response);
        const results = response?.data?.results;
        // console.log(results);
        const a = results?.map((item) => {
          const isFavorite = favoritePokemon?.some(
            (fav) => fav.name === item.name
          );
          return { ...item, isFavorite };
        });
        // console.log(a);
        setAllPokemon(a);
        setFilteredPokemons(a);
        // console.log(allPokemon);
        setLoading(false);
      } catch (error) {
        setError(error?.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [setAllPokemon]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = allPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term)
    );
    setFilteredPokemons(filtered);
    setPage(1);
    setLimit(12);
    setSortOrder("asc");
  };
  const handleSortClick = (order) => {
    setSortOrder(order);
    console.log(order)
    
    const sorted = filteredPokemons.sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredPokemons(sorted);
  }

  if (loading) return <p> Loading....</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-slate-400">
      <div className=" p-4  ">
        <h1 className="text-3xl md:text-5xl font-bold text-center custom-gradient md:pt-10 pt-5 font-borel">
          Welcome to the Pokémon World!
        </h1>
        <p className="text-center md:text-2xl pt-10 text-black font-borel">
          This is the home page for the Pokémon app.
        </p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4 text-black">
            <Sort handleSortClick={handleSortClick} sortOrder={sortOrder} />
            {/* <Filter /> */}
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1  w-36 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute ml-28 mt-2">
              <SearchSvg />
            </div>
          </div>
        </div>
        <GrideContainer
          pokemons={filteredPokemons}
          page={page}
          limit={limit}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default HomePage;
