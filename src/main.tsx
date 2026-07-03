import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <h1 className="text-heading-xl">Texto XL</h1>
    <h2 className="text-heading-l">Texto l</h2>
    <h3 className="text-heading-m">Texto m</h3>
    <p className="text-body-l">Body L</p>
  </StrictMode>,
);
