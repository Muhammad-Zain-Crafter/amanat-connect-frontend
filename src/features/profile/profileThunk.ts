import { createAsyncThunk } from "@reduxjs/toolkit";
import * as profileService from "../../services/profileService";
import { getProfile } from "../auth/authThunk";

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (formData: FormData, thunkAPI) => {
    try {
      const response =
        await profileService.updateProfile(formData);

      // Refresh authenticated user
      await thunkAPI.dispatch(getProfile());

      return response.data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to update profile."
      );
    }
  }
);

export const changePassword = createAsyncThunk(
  "profile/changePassword",
  async (
    data: {
      currentPassword: string;
      newPassword: string;
    },
    thunkAPI
  ) => {
    try {
      const response =
        await profileService.changePassword(data);

      return response.data.message;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to change password."
      );
    }
  }
);