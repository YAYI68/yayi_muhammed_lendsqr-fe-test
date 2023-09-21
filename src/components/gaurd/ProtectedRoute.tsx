import { useAuth } from "../../hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to={`/login`} replace state={{ path: pathname }} />;
};

export default ProtectedRoute;
