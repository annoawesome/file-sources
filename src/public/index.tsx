import React from "react";
import { Container, createRoot } from "react-dom/client";
import App from "./App";

document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById("app") as Container);
root.render(<App />);
