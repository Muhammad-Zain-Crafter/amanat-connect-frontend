import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../services/authService";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    data: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await authService.login(data);

      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData: FormData, thunkAPI) => {
    try {
      const response = await authService.register(formData);

      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) => {
    try {
      const response = await authService.getProfile();

      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      await authService.logout();
      return true;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Logout failed"
      );
    }
  }
);