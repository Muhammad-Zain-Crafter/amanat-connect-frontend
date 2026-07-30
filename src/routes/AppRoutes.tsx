import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Assets from "../pages/Assets";
import AssetDetails from "../pages/AssetDetails";
import ReportAsset from "../pages/ReportAsset";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectRoutes";
import MyAssets from "../pages/MyAssets";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import MyClaims from "../pages/MyClaims";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/AdminDashboard";
import PendingAssets from "../pages/PendingAssets";
import ApproveAsset from "../pages/ApproveAsset";
import PendingClaims from "../pages/PendingClaims";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/assets/:id" element={<AssetDetails />} />

        <Route
          path="/report-asset"
          element={
            <ProtectedRoute>
              <ReportAsset />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-assets"
          element={
            <ProtectedRoute>
              <MyAssets />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route
          path="/my-claims"
          element={
            <ProtectedRoute>
              <MyClaims />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/pending-assets"
          element={
            <AdminRoute>
              <PendingAssets />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/pending-assets/:id"
          element={
            <AdminRoute>
              <ApproveAsset />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/pending-claims"
          element={
            <AdminRoute>
              <PendingClaims />
            </AdminRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
