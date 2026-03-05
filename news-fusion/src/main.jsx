import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NewsProvider } from "./context/NewsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NewsProvider>
    <App />
  </NewsProvider>
);