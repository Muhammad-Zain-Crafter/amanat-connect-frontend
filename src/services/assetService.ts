import axiosInstance from "../api/axios";

export const getAllAssets = (page = 1, search = "") => {
  return axiosInstance.get("/assets/get-allAssets", {
    params: {
      page,
      search,
    },
  });
};

export const getAssetById = (id: string) => {
  return axiosInstance.get(`/assets/getAsset/${id}`);
};

export const reportAsset = (formData: FormData) => {
    return axiosInstance.post(
        "/assets/report-asset",
        formData
    );
};

export const getMyAssets = () => {
  return axiosInstance.get("/assets/get-myAssets");
};