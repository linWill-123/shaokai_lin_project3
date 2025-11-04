import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/button.css";
import "./styles/sudoku.css";
import "./styles/utils.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
