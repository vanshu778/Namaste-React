import React from "react";
import ReactDOM from "react-dom/client";

const Heading = (
  <h1 className="root">
    Namaste React using JSX
  </h1>);


//React Component => everything in react are component.
//1.class based components
//2.functional component

//React Functional Component -> normal js function
//method 1
const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};
//method2
const HeadingComponent1 = () => (
  <h1 className="heading">Namaste React Functional Component</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
