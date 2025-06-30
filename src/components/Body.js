import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local State Variable - Super Powerful variable (Hooks)
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
 
  // normal js variable
  // let listOfRestaurants = [];

  //Normal Js Varible
  let listOfRestaurants2 = [
    {
      info: {
        id: "52630",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/49e9c813-a79b-459c-a494-ef31a1644a81_52630.JPG",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
        avgRating: 4.5,
        deliveryTime: 15,
      },
    },
    {
      info: {
        id: "52631",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/49e9c813-a79b-459c-a494-ef31a1644a81_52630.JPG",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
        avgRating: 3.8,
        deliveryTime: 15,
      },
    },
    {
      info: {
        id: "52633",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/49e9c813-a79b-459c-a494-ef31a1644a81_52630.JPG",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "American", "Salads", "Beverages", "Chaat"],
        avgRating: 4.1,
        deliveryTime: 15,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
            //Filter logic
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
