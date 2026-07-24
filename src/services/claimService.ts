import axiosInstance from "../api/axios";

export const createClaim = (
  assetId: string,
  proofDescription: string
) => {
  return axiosInstance.post(
    `/claims/${assetId}/claim`,
    {
      proofDescription,
    }
  );
};

export const getMyClaims = () => {
  return axiosInstance.get("/claims/my-claims");
};

export const deleteClaim = (id: string) => {
  return axiosInstance.delete(`/claims/${id}`);
};