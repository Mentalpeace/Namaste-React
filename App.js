import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement("h1", {id:"heading"}, "Hello From React App!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);