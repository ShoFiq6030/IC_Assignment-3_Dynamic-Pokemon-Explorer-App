import React, { useState } from "react";
import FilterSvg from "./../../Svgs/FilterSvg";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className=" flex gap- px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="">Filter</p>
        <div className="p-1 ml-1">
          <FilterSvg />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0  mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg  group-hover:block">
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Option 1
          </button>
          <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
            Option 2
          </button>
        </div>
      )}
    </div>
  );
}

export default Filter;
