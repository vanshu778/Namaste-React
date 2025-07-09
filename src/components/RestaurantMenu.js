import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  console.log(itemCards);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
        <p className="text-gray-600 text-lg">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Menu</h2>
        <ul className="space-y-3">
          {itemCards?.map((item) => (
            <li
              key={item.card.info.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-gray-800">{item.card.info.name}</span>
              <span className="text-green-700 font-medium">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
