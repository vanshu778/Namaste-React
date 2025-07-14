import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6 text-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-xl p-6">
        {cartItems.length === 0 ? (
          <h2 className="text-lg text-gray-600 mb-4">
            🛒 Your cart is empty. Add items to the cart!
          </h2>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>

            <ItemList items={cartItems} />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
