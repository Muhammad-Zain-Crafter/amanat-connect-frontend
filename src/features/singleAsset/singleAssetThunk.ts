import { createAsyncThunk } from "@reduxjs/toolkit";
import * as assetService from "../../services/assetService";

export const fetchAssetById = createAsyncThunk(
  "singleAsset/fetchById",
  async (id: string, thunkAPI) => {
    try {
      const response = await assetService.getAssetById(id);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch asset"
      );
    }
  }
);