import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  Building2,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { registerUser } from "../../features/auth/authThunk";
import { useAppSelector } from "../../hooks/useAppSelector";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    department: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const { loading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setProfileImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const data = new FormData();

    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("studentId", formData.studentId);
    data.append("department", formData.department);
    data.append("password", formData.password);

    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    try {
      await dispatch(registerUser(data)).unwrap();

      navigate("/login");
    } catch (err: any) {
      setError(err || "Registration failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      {/* Profile Image */}

      <div className="mb-8 flex flex-col items-center">
        <label htmlFor="image" className="cursor-pointer">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-28 w-28 rounded-full object-cover ring-2 ring-emerald-500"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">
              <Upload className="text-slate-500" />
            </div>
          )}
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />

        <p className="mt-3 text-sm text-gray-500">Upload Profile Image</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}

        <InputField
          icon={<User size={20} />}
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        {/* Email */}

        <InputField
          icon={<Mail size={20} />}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Student ID */}

        <InputField
          icon={<GraduationCap size={20} />}
          label="Student ID"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        />

        {/* Department */}

        <InputField
          icon={<Building2 size={20} />}
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        {/* Password */}

        <div>
          <label className="mb-2 block font-medium">Password</label>
          <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
            <Lock className="text-gray-400" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        {/* Confirm Password */}
        <div>
          <label className="mb-2 block font-medium">Confirm Password</label>

          <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
            <Lock className="text-gray-400" size={20} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
      {error && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
          {error}
        </div>
      )}
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-emerald-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
};

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  type?: string;
}

const InputField = ({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
}: InputProps) => (
  <div>
    <label className="mb-2 block font-medium">{label}</label>

    <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
      <span className="text-gray-400">{icon}</span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 outline-none"
      />
    </div>
  </div>
);

export default RegisterForm;
