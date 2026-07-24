import { createSlice } from "@reduxjs/toolkit";
import type { ClaimState } from "./claimTypes";
import {
  createClaim,
  getMyClaims,
  deleteClaim,
} from "./claimThunk";

const initialState: ClaimState = {
  claims: [],
  loading: false,
  success: null,
  error: null,
};

const claimSlice = createSlice({
  name: "claim",
  initialState,

  reducers: {
    clearClaimMessage(state) {
      state.error = null;
      state.success = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Create Claim

      .addCase(createClaim.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })

      .addCase(createClaim.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })

      .addCase(createClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Get My Claims

      .addCase(getMyClaims.pending, (state) => {
        state.loading = true;
      })

      .addCase(getMyClaims.fulfilled, (state, action) => {
        state.loading = false;
        state.claims = action.payload;
      })

      .addCase(getMyClaims.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete Claim

      .addCase(deleteClaim.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteClaim.fulfilled, (state, action) => {
        state.loading = false;

        state.claims = state.claims.filter(
          (claim) => claim._id !== action.payload.id
        );

        state.success = action.payload.message;
      })

      .addCase(deleteClaim.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearClaimMessage } =
  claimSlice.actions;

export default claimSlice.reducer;