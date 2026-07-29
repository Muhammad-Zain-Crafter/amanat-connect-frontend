import { createSlice } from "@reduxjs/toolkit";
import type { AdminState } from "./adminTypes";
import {
  fetchDashboardStats,
  fetchPendingAssets,
  approveAsset,
  fetchPendingClaims,
  approveClaim,
  rejectClaim,
} from "./adminThunk";

const initialState: AdminState = {
  dashboardStats: null,
  pendingAssets: [],
  pendingClaims: [],
  loading: false,
  success: null,
  error: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    clearAdminMessage: (state) => {
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // ================= Dashboard =================

      .addCase(fetchDashboardStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboardStats = action.payload;
      })

      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ================= Pending Assets =================

      .addCase(fetchPendingAssets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPendingAssets.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingAssets = action.payload;
      })

      .addCase(fetchPendingAssets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ================= Approve Asset =================

      .addCase(approveAsset.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })

      .addCase(approveAsset.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;

        // Remove approved asset from pending list
        state.pendingAssets = state.pendingAssets.filter(
          (asset) => asset._id !== action.meta.arg
        );
      })

      .addCase(approveAsset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ================= Pending Claims =================

      .addCase(fetchPendingClaims.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchPendingClaims.fulfilled, (state, action) => {
        state.loading = false;
        state.pendingClaims = action.payload;
      })

      .addCase(fetchPendingClaims.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ================= Approve Claim =================

      .addCase(approveClaim.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })

      .addCase(approveClaim.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;

        state.pendingClaims = state.pendingClaims.filter(
          (claim) => claim._id !== action.meta.arg
        );
      })

      .addCase(approveClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // ================= Reject Claim =================

      .addCase(rejectClaim.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })

      .addCase(rejectClaim.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;

        state.pendingClaims = state.pendingClaims.filter(
          (claim) => claim._id !== action.meta.arg.id
        );
      })

      .addCase(rejectClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearAdminMessage } = adminSlice.actions;

export default adminSlice.reducer;