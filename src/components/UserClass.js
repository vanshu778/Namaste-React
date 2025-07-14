import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/vanshu778");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-sm mx-auto text-center">
        <h2 className="text-xl font-bold text-purple-600 mb-4">React Class Component</h2>
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-purple-300"
        />
        <p className="text-gray-700 font-semibold">Name:</p>
        <p className="text-gray-800">{name}</p>
        <p className="text-gray-700">Location: {location}</p>
        <p className="text-gray-500">Contact: vanshu778</p>
      </div>
    );
  }
}

export default UserClass;
