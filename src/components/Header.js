import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-20 sm:w-24 hover:scale-105 transition-transform duration-300" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex flex-wrap items-center gap-4 text-lg font-medium">
          <li className="text-gray-700">
            Online Status: <span className="font-semibold">{onlineStatus ? "✅" : "🔴"}</span>
          </li>

          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/grocery" className="hover:text-blue-600 transition-colors duration-200">
              Grocery
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg transition-colors duration-200"
            >
              Cart - ({cartItems.length} items)
            </Link>
          </li>

          <li>
            <button
              className="bg-purple-500 text-white px-4 py-1 rounded-lg hover:bg-purple-600 transition-colors duration-200"
              onClick={() =>
                setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnNameReact}
            </button>
          </li>

          <li className="text-gray-800 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
