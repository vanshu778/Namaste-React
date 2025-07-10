import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext"

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent  constructor");
  }

  componentDidMount() {
   // console.log("Parent  Component Did Mount");
  }

  render() {
   // console.log("parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Swiggy</h2>
        <UserClass
          name={"Vanshika Thesiya(class)"}
          location={"Ahmedabad Class"}
        />
      </div>
    );
  }
}

export default About;
