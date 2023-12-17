import { createBrowserRouter } from "react-router-dom";
import { Login, UserDetail, Users } from "../pages";
import { DashboardLayout } from "../components/layout";
import ProtectedRoute from "../components/gaurd/ProtectedRoute";
import NotFound from "../components/notfound/NotFound";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            children: [
              {
                path: "",
                element: <Users />,
                // errorElement: <NotFound />,
              },

              {
                path: ":username",
                element: <UserDetail />,
              },
            ],
          },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
