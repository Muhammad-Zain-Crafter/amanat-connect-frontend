import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

interface Props {
  children: React.ReactNode;
}

const AdminRoute = ({ children }: Props) => {
  const { isAuthenticated, user, authChecked } = useAppSelector(
    (state) => state.auth
  );

  if (!authChecked) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;