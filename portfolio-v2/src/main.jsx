import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
/* existing imports */
import Root from "./routes/root";
import Resume from "./routes/resume";
import TextAnalysis from "./routes/text-mining-paper";
import "./index.css";
import $ from "jquery";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";

const router = createBrowserRouter([
  {
    path: "/portfolio-website-v2",
    element: <Root />,
  },
  {
    path: "/portfolio-website-v2/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio-website-v2/text-analysis",
    element: <TextAnalysis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <SideBar />
    <RouterProvider router={router} basename={process.env.PUBLIC_URL} />
  </React.StrictMode>
);
