import { Home } from "../ui/screens/home/home";
import { Login } from "../ui/screens/login/login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);
