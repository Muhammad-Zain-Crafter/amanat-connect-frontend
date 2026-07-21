import { createSlice } from "@reduxjs/toolkit";
import { fetchAssetById } from "./singleAssetThunk";
import type { SingleAssetState } from "./singleAssetTypes";

const initialState: SingleAssetState = {
  asset: null,
  loading: false,
  error: null,
};

const singleAssetSlice = createSlice({
  name: "singleAsset",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssetById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAssetById.fulfilled, (state, action) => {
        state.loading = false;
        state.asset = action.payload.data;
      })
      .addCase(fetchAssetById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default singleAssetSlice.reducer;