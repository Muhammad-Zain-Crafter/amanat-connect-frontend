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
}) => {
  return axiosInstance.post(
    "/users/change-password",
    data
  );
};