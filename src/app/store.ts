import authReducer from "../features/auth/authSlice";
import assetReducer from "../features/asset/assetSlice";
import singleAssetReducer from "../features/singleAsset/singleAssetSlice"
import reportAssetReducer from "../features/reportAsset/reportAssetSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    asset: assetReducer,
    singleAsset: singleAssetReducer,
    reportAsset: reportAssetReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;