import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({
  children,
}: ProtectedRouteProps) => {
  const { isAuthenticated, authChecked } =
    useAppSelector((state) => state.auth);

  if (!authChecked) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;