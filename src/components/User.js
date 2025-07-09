import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);

  useEffect(() => {
    //Api Calls
  },[])

  // async funciton getUserInfo() => {
  //   const data = await fetch("https://api.github.com/users/vanshu778")
  // }
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Gujarat</h3>
      <h4>Contact: vanshii778</h4>
    </div>
  );
};

export default User;
