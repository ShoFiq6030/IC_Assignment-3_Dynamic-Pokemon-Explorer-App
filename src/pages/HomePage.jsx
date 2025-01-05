import React from "react";
import Sort from "../components/HomePage/Sort";
import Filter from "../components/HomePage/Filter";
import SearchSvg from "./../Svgs/SearchSvg";

function HomePage() {
  const handlePrevious = () => {
    console.log("Previous page clicked");
  };

  const handleNext = () => {
    console.log("Next page clicked");
  };
  return (
    <div className="h-screen">
      <div className=" p-4 m-10 ">
        <h1 className="text-3xl md:text-5xl font-bold text-center custom-gradient md:pt-10 pt-5">
          Welcome to the Pokémon World!
        </h1>
        <p className="text-center md:text-2xl pt-10">
          This is the home page for the Pokémon app.
        </p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4 text-black">
            <Sort />
            <Filter />
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1  w-36 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute ml-28 mt-2">
              <SearchSvg />
            </div>
          </div>
        </div>

        <div className="bg-slate-400 rounded p-10" >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-green-500 p-4 text-white rounded">1</div>
            <div className="bg-green-500 p-4 text-white rounded">2</div>
            <div className="bg-green-500 p-4 text-white rounded">3</div>
            <div className="bg-green-500 p-4 text-white rounded">4</div>
            <div className="bg-green-500 p-4 text-white rounded">5</div>
            <div className="bg-green-500 p-4 text-white rounded">6</div>
          </div>

          {/* Pagination Section */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePrevious}
              className="px-3 py-2  border border-white text-white rounded hover:custom-gradient focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-2 mx-2 border border-white text-white rounded hover:custom-gradient focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
