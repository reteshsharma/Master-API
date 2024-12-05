import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/Context.jsx";
import Create from "./components/Create.jsx";
import Read from "./components/Read.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/read/:id",
    element: <Read />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProvider>
    <RouterProvider router={router}></RouterProvider>
  </UserProvider>
  // </StrictMode>
);
