import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
  -logo
  -nav items
Body
  -search
  -restaurant container
    -restaurant card
        -img
        -name of res
        -star rating
        -cuisine
        -delivery time
Footer
  -copyright
  -links
  -address
  -contact
*/

const Header = () => {
  return (
    <div className="header">
        <div>
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yPxmHYHF8tgtmWhpC59Jk2PLpzbxaL-9bA&s" alt="logo"/>
        </div>
        <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}

const RestaurantCard = () => {
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/b9d296fa-f6f9-4cf6-a219-61efdd4c146c_156457.jpg"/>
        <h3>Superia</h3>
        <h4>Biryani, North India, Asian</h4>
        <h4>4.4 stars</h4>
        <h4>38 minutes</h4>
    </div>
  )
};
const Body = () => {
  return(
    <div className="body">
        <div className="search">
          Search
        </div>
        <div className="res-container">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
    </div>
  )
}
const AppLayout = () => {
  return(
    <div className="app"> 
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout  />);
