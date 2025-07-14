import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-red-600 text-xl mt-10">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-6 py-4">
      {/* Filters Section */}
      <div className="filter flex flex-wrap gap-4 justify-between items-center mb-6 bg-gray-50 p-4 rounded-lg shadow-sm">
        {/* Search Box */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 rounded px-3 py-1 outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search restaurant..."
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Filter */}
        <div>
          <button
            className="px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
            onClick={() => {
              const topRated = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(topRated);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* Username Input */}
        <div className="flex items-center gap-2">
          <label className="font-medium">UserName:</label>
          <input
            className="border border-gray-300 rounded px-2 py-1 outline-none focus:ring-2 focus:ring-purple-300"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="hover:scale-105 transition-transform duration-200"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
