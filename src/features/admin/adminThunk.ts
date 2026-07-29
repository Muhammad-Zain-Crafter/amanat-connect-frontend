import { createAsyncThunk } from "@reduxjs/toolkit";
import * as adminService from "../../services/adminService";

export const fetchDashboardStats = createAsyncThunk(
  "admin/fetchDashboardStats",
  async (_, thunkAPI) => {
    try {
      const response =
        await adminService.getDashboardStats();

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to fetch dashboard stats"
      );
    }
  }
);

export const fetchPendingAssets = createAsyncThunk(
  "admin/fetchPendingAssets",
  async (_, thunkAPI) => {
    try {
      const response =
        await adminService.getPendingAssets();

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to fetch pending assets"
      );
    }
  }
);

export const approveAsset = createAsyncThunk(
  "admin/approveAsset",
  async (id: string, thunkAPI) => {
    try {
      const response =
        await adminService.approveAsset(id);

      return response.data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to approve asset"
      );
    }
  }
);

export const fetchPendingClaims = createAsyncThunk(
  "admin/fetchPendingClaims",
  async (_, thunkAPI) => {
    try {
      const response =
        await adminService.getPendingClaims();

      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to fetch claims"
      );
    }
  }
);

export const approveClaim = createAsyncThunk(
  "admin/approveClaim",
  async (id: string, thunkAPI) => {
    try {
      const response =
        await adminService.approveClaim(id);

      return response.data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to approve claim"
      );
    }
  }
);

export const rejectClaim = createAsyncThunk(
  "admin/rejectClaim",
  async (
    {
      id,
      adminNote,
    }: {
      id: string;
      adminNote?: string;
    },
    thunkAPI
  ) => {
    try {
      const response =
        await adminService.rejectClaim(
          id,
          adminNote
        );

      return response.data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to reject claim"
      );
    }
  }
);