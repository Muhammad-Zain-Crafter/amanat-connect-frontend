export interface Claim {
  _id: string;
  asset: any;
  claimedBy: any;
  proofDescription: string;
  status: "pending" | "approved" | "rejected";
  adminNote?: string;
  createdAt: string;
}

export interface ClaimState {
  claims: Claim[];
  loading: boolean;
  success: string | null;
  error: string | null;
}