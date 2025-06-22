import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement - Object => HtmlElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);
//using jsx
//jsx - is not Html in js
//jsx - Html-like or XML-like syntax
//JSX(transpiled before it reaches tje JS Engine) - by PARCEL - give to BABEL(js package)
//JSX => Babel transpiles it to React.createElement => ReactElement-jsObject => HtmlElement(render)
const jsxHeading = <h1 className="root">Namaste React using JSX</h1>;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxHeading);
