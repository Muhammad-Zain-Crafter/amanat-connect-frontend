import axiosInstance from "../api/axios";

export const login = (data: {
  email: string;
  password: string;
}) => {
  return axiosInstance.post("/users/login", data);
};

export const register = (formData: FormData) => {
  return axiosInstance.post("/users/register", formData);
};

export const getProfile = () => {
  return axiosInstance.get("/users/getProfile");
};

export const logout = () => {
  return axiosInstance.post("/users/logout");
};