import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import TodosProvider from "./context/TodosProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </ThemeProvider>
  </StrictMode>
);
