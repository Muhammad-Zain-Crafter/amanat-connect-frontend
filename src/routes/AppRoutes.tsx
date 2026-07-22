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
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
