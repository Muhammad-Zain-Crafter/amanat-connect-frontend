import { createAsyncThunk } from "@reduxjs/toolkit";
import * as assetService from "../../services/assetService";

export const fetchMyAssets = createAsyncThunk(
  "myAssets/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await assetService.getMyAssets();

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message
      );
    }
  }
);