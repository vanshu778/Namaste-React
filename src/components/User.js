import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);

  useEffect(() => {
    //Api Calls
  },[])
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h2>Name:{name}</h2>
      <h3>Location: Gujarat</h3>
      <h4>Contact: vanshii778</h4>
    </div>
  );
};

export default User;
