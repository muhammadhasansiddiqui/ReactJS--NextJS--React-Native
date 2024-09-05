import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./Router.jsx";
import ThemeContextProvider from "./Contract/ThemeCon.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <AppRouter />
  </ThemeContextProvider>
);