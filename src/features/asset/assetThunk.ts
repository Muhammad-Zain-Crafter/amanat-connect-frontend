import { createAsyncThunk } from "@reduxjs/toolkit";
import * as assetService from "../../services/assetService";

export const fetchAssets = createAsyncThunk(
  "asset/fetchAssets",
  async (
    {
      page = 1,
      search = "",
    }: {
      page?: number;
      search?: string;
    },
    thunkAPI,
  ) => {
    try {
      const response = await assetService.getAllAssets(page, search);

      console.log("API Response:", response.data);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch assets",
      );
    }
  },
);
