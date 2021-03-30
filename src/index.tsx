import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const MyApp = () => {
  return <h1>Hello</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById("root")
);
