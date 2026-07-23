import { createSlice } from "@reduxjs/toolkit";
import type { ProfileState } from "./profileTypes";
import { updateProfile, changePassword, forgotPassword, resetPassword } from "./profileThunk";

const initialState: ProfileState = {
  loading: false,
  success: null,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfileMessage(state) {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Update Profile

      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })

      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })

      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Change Password

      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })

      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })

      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload as string;
      })

      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })

      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearProfileMessage } = profileSlice.actions;

export default profileSlice.reducer;
