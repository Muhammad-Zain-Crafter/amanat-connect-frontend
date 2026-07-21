import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  GraduationCap,
  Building2,
  Upload,
} from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [image, setImage] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    department: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(formData);
    console.log(image);
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

        <p className="mt-3 text-sm text-gray-500">
          Upload Profile Image
        </p>

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

        {/* Contact */}

        <InputField
          icon={<Phone size={20} />}
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />

        {/* Password */}

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

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
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>
        </div>

        {/* Confirm Password */}

        <div className="md:col-span-2">

          <label className="mb-2 block font-medium">
            Confirm Password
          </label>

          <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">

            <Lock className="text-gray-400" size={20} />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

        </div>

      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
      >
        Create Account
      </button>

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
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
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
    <label className="mb-2 block font-medium">
      {label}
    </label>

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