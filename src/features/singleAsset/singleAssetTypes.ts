import type { Asset } from "../asset/assetTypes";

export interface SingleAssetState {
  asset: Asset | null;
  loading: boolean;
  error: string | null;
}