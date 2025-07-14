import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-4 my-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
        >
          {/* Left Section */}
          <div className="w-full md:w-9/12">
            <div className="pb-2">
              <h3 className="text-md font-semibold text-gray-800">
                {item.card.info.name}
              </h3>
              <span className="text-sm text-gray-600">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          {/* Right Section */}
          <div className="relative w-full md:w-3/12 flex flex-col items-center">
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-32 h-24 object-cover rounded-lg mb-2"
              />
            )}
            <button
              onClick={() => handleAddItem(item)}
              className="px-4 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition"
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
