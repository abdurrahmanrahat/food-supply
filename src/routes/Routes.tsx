import AdminLayout from "@/components/layout/AdminLayout";
import AllSupplies from "@/pages/Admin/AllSupplies/AllSupplies";
import CreateSupply from "@/pages/Admin/CreateSupply/CreateSupply";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/supplies",
        element: <AllSupplies />,
      },
      {
        path: "/admin/create-supply",
        element: <CreateSupply />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
