import { createAsyncThunk } from "@reduxjs/toolkit";
import * as reportAssetService from "../../services/assetService";

export const createAsset = createAsyncThunk(
  "reportAsset/createAsset",
  async (formData: FormData, thunkAPI) => {
    try {
      const response = await reportAssetService.reportAsset(formData);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to report asset"
      );
    }
  }
);