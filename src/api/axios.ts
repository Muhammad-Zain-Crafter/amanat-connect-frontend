import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/v1/campusAssetRecovery",
  withCredentials: true,
});

export default axiosInstance;