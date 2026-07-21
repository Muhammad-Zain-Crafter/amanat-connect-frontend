import { createSlice } from "@reduxjs/toolkit";
import { createAsset } from "./reportAssetThunk";
import type { ReportAssetState } from "./reportAssetTypes";

const initialState: ReportAssetState = {
  loading: false,
  error: null,
  success: false,
};

const reportAssetSlice = createSlice({
  name: "reportAsset",
  initialState,

  reducers: {
    resetReportAsset(state) {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createAsset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createAsset.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })

      .addCase(createAsset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetReportAsset } =
  reportAssetSlice.actions;

export default reportAssetSlice.reducer;