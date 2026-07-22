import type { Asset } from "../asset/assetTypes";

export interface MyAssetsState {
  assets: Asset[];
  loading: boolean;
  error: string | null;
}