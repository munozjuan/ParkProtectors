import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Router should ONLY be here
import App from "./App";
import "./index.css";
import './tailwind.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/ParkProtectors">
  <App />
</BrowserRouter>
);