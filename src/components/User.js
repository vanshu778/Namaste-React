import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1] = useState(1);

  useEffect(() => {
    // API Calls can go here
  }, []);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold text-purple-600 mb-4">React Functional Component</h2>
      <p className="text-gray-700 mb-1">Count: <span className="font-semibold">{count}</span></p>
      <p className="text-gray-700 mb-1">Count1: <span className="font-semibold">{count1}</span></p>
      <p className="text-gray-700 mt-4 font-semibold">Name:</p>
      <p className="text-gray-800">{name}</p>
      <p className="text-gray-700">Location: Gujarat</p>
      <p className="text-gray-500 mb-4">Contact: vanshii778</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
      >
        Increase Count
      </button>
    </div>
  );
};

export default User;
