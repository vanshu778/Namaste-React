import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    //Api call
    const data = await fetch("https://api.github.com/users/vanshu778");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate(){
    // console.log("Component Did Update")
  }

  componentWillUnmount(){
    // console.log("Component Will Unmount")
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: vanshu778</h4>
      </div>
    );
  }
}

export default UserClass;



/*
-------Mounting

Constructor(dummy)
Render(dummy)
    <HTML Dummy>
Component Did Mount
    <API Call>
    <this.setState> -> State Variable is updated

-------Update

render(API data)
<HTML (new Api data)>
componentDid Update
*/