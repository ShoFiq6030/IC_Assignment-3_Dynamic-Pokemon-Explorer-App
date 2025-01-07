import React, { useState } from "react";
import SortSvg from "../../Svgs/SortSvg";

function Sort({ handleSortClick, sortOrder }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative ">
      <button
        className="flex gap-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="">Sort_by_Name</p>
        <div className="p-1 ml-1">
          <SortSvg />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-36 bg-white border border-gray-300 rounded shadow-lg  group-hover:block">
          <button
            className={`block w-full px-4 py-2 text-center  ${
              sortOrder === "asc" ? "bg-gray-400" : "hover:bg-gray-100"
            }`}
            onClick={() => handleSortClick("asc")}
          >
            A-Z
          </button>
          <hr />
          <button
             className={`block w-full px-4 py-2 text-center  ${
              sortOrder === "desc" ? "bg-gray-400" : "hover:bg-gray-100"
            }`}
            onClick={() => handleSortClick("desc")}
          >
            Z-A
          </button>
        </div>
      )}
    </div>
  );
}

export default Sort;
