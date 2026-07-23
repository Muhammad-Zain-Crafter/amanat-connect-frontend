import axiosInstance from "../api/axios";

export const updateProfile = (formData: FormData) => {
  return axiosInstance.put(
    "/users/updateProfile",
    formData
  );
};

export const changePassword = (data: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  return axiosInstance.post(
    "/users/change-password",
    data
  );
};

export const forgotPassword = (data: {
  email: string;
}) => {
  return axiosInstance.post(
    "/users/forgot-password",
    data
  );
};

export const resetPassword = (
  token: string,
  password: string
) => {
  return axiosInstance.post(
    `/users/reset-password/${token}`,
    { password }
  );
};