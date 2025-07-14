import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          About Class Component
        </h1>

        {/* LoggedIn User */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-600">Logged In User:</p>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-2xl font-semibold text-purple-600">
                {loggedInUser}
              </h1>
            )}
          </UserContext.Consumer>
        </div>

        <h2 className="text-xl text-center font-medium text-gray-700 mb-8">
          This is Swiggy
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <User name={"Vanshika Thesiya (Function)"} />
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
