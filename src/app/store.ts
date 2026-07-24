import authReducer from "../features/auth/authSlice";
import assetReducer from "../features/asset/assetSlice";
import singleAssetReducer from "../features/singleAsset/singleAssetSlice"
import reportAssetReducer from "../features/reportAsset/reportAssetSlice"
import myAssets from "../features/myAssets/myAssetsSlice"
import profileReducer from "../features/profile/profileSlice";
import claimReducer from "../features/claim/claimSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    asset: assetReducer,
    singleAsset: singleAssetReducer,
    reportAsset: reportAssetReducer,
    myAssets: myAssets,
    profile: profileReducer,
    claim: claimReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;