import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/Home";
// import Login from "./pages/Login.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },

]);

const RouterSetup = () => (
    <RouterProvider router={router} />
);

export default RouterSetup;
