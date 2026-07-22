import { createSlice } from "@reduxjs/toolkit";
import type { MyAssetsState } from "./myAssetsTypes";
import { fetchMyAssets } from "./myAssetsThunk";

const initialState: MyAssetsState = {
  assets: [],
  loading: false,
  error: null,
};

const myAssetsSlice = createSlice({
  name: "myAssets",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Pending
      .addCase(fetchMyAssets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Fulfilled
      .addCase(fetchMyAssets.fulfilled, (state, action) => {
        state.loading = false;
        state.assets = action.payload;
      })

      // Rejected
      .addCase(fetchMyAssets.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) ||
          "Failed to fetch assets";
      });
  },
});

export default myAssetsSlice.reducer;