export interface User {
  _id: string;
  fullName: string;
  email: string;
  studentId: string;
  department: string;
  contactNumber: string;
  profileImage?: {
    url: string;
    publicId: string;
  };
  role: "student" | "admin";
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  authChecked: boolean;
}