import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 my-4 bg-gray-50 shadow-md rounded-lg transition-all duration-300">
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-100 rounded-t-lg"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg text-gray-800">
            {data.title} <span className="text-gray-500">({data.itemCards.length})</span>
          </span>
          <span className="text-xl transition-transform duration-300">
            {showItems ? "▲" : "▼"}
          </span>
        </div>

        {/* Body */}
        {showItems && (
          <div className="px-4 pb-4">
            <ItemList items={data.itemCards} dummy={dummy} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
