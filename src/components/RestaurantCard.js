import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <img
        className="rounded-lg w-full h-40 object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg text-gray-800">{name}</h3>
      <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
      <h4 className="text-sm text-green-600 font-medium">{avgRating} ★</h4>
      <h4 className="text-sm text-gray-700">{costForTwo}</h4>
      <h4 className="mt-2 text-xs text-gray-500 italic">User: {loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
