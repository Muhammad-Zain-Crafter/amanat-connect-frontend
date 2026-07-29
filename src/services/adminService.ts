import axiosInstance from "../api/axios";

// Dashboard
export const getDashboardStats = () => {
  return axiosInstance.get("/admin/dashboard-stats");
};

// Assets
export const getPendingAssets = () => {
  return axiosInstance.get("/assets/get-pendingAssets");
};

export const approveAsset = (id: string) => {
  return axiosInstance.patch(`/assets/${id}/approve`);
};

// Claims
export const getPendingClaims = () => {
  return axiosInstance.get("/claims/get-pendingClaims");
};

export const getAllClaims = (
  page = 1,
  limit = 10
) => {
  return axiosInstance.get("/claims/get-allClaims", {
    params: { page, limit },
  });
};

export const approveClaim = (id: string) => {
  return axiosInstance.patch(`/claims/${id}/approve`);
};

export const rejectClaim = (
  id: string,
  adminNote?: string
) => {
  return axiosInstance.patch(`/claims/${id}/reject`, {
    adminNote,
  });
};