import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
=======
import { createRoot } from "react-dom/client";
import App from "./App";

// CSS Styles
import "./index.css";

createRoot(document.getElementById("root")).render(<App />);
>>>>>>> 4dcd32c (Added new files and folders)
