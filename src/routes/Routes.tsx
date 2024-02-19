import AdminLayout from "@/components/layout/AdminLayout";
import AllSupplies from "@/pages/Admin/AllSupplies/AllSupplies";
import CreateSupply from "@/pages/Admin/CreateSupply/CreateSupply";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Supplies from "@/pages/Supplies/Supplies";
import SupplyDetails from "@/pages/SupplyDetails/SupplyDetails";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "supplies/:id",
        element: <SupplyDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
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
