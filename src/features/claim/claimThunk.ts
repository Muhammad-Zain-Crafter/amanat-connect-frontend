import { createAsyncThunk } from "@reduxjs/toolkit";
import * as claimService from "../../services/claimService";

export const createClaim = createAsyncThunk(
  "claim/createClaim",
  async (
    data: {
      assetId: string;
      proofDescription: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await claimService.createClaim(
        data.assetId,
        data.proofDescription
      );

      return response.data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to submit claim."
      );
    }
  }
);

export const getMyClaims = createAsyncThunk(
  "claim/getMyClaims",
  async (_, thunkAPI) => {
    try {
      const response =
        await claimService.getMyClaims();

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to fetch claims."
      );
    }
  }
);

export const deleteClaim = createAsyncThunk(
  "claim/deleteClaim",
  async (id: string, thunkAPI) => {
    try {
      const response =
        await claimService.deleteClaim(id);

      return {
        id,
        message: response.data.message,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to cancel claim."
      );
    }
  }
);