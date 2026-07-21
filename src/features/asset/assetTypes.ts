export interface Asset {
  _id: string;
  title: string;
  description: string;
  category: string;
  status: "lost" | "found" | "claimed";
  location: string;
  contactNumber: string;
  date: string;
  isApproved: boolean;

  image: {
    url: string;
    publicId: string;
  };

  reportedBy: {
    _id: string;
    fullName: string;
    studentId: string;
  };
}

export interface AssetState {
  assets: Asset[];
  loading: boolean;
  error: string | null;

  currentPage: number;
  totalPages: number;
  totalItems: number;
}