import type { Asset } from "../asset/assetTypes";
import type { Claim } from "../claim/claimTypes";

export interface DashboardStats {
  totalUsers: number;
  totalAssets: number;
  totalLostAssets: number;
  totalFoundAssets: number;
  totalClaimedAssets: number;
  pendingAssets: number;
  pendingClaims: number;
  approvedClaims: number;
  rejectedClaims: number;
  recentAssets: Asset[];
  recentClaims: Claim[];
}

export interface AdminState {
  dashboardStats: DashboardStats | null;
  pendingAssets: Asset[];
  pendingClaims: Claim[];
  loading: boolean;
  success: string | null;
  error: string | null;
}