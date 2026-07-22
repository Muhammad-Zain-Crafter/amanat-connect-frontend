import { useEffect, useState } from "react";
import {
  User,
  GraduationCap,
  Building2,
  Mail,
  Upload,
} from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  clearProfileMessage,
} from "../../features/profile/profileSlice";
import { updateProfile } from "../../features/profile/profileThunk";

const EditProfileForm = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const { loading, success, error } = useAppSelector(
    (state) => state.profile
  );

  const [profileImage, setProfileImage] =
    useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    email: "",
    studentId: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        department: user.department,
        email: user.email,
        studentId: user.studentId,
      });

      setPreview(user.profileImage?.url || "");
    }
  }, [user]);

  useEffect(() => {
    return () => {
      dispatch(clearProfileMessage());
    };
  }, [dispatch]);

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

    setProfileImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const data = new FormData();

    data.append("fullName", formData.fullName);
    data.append("department", formData.department);

    if (profileImage) {
      data.append("profileImage", profileImage);
    }

    dispatch(updateProfile(data));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-bold">
        Edit Profile
      </h2>

      {/* Profile Image */}

      <div className="mb-8 flex flex-col items-center">
        <label
          htmlFor="profileImage"
          className="cursor-pointer"
        >
          {preview ? (
            <img
              src={preview}
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover ring-4 ring-emerald-500"
            />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-100">
              <Upload className="text-slate-500" />
            </div>
          )}
        </label>

        <input
          id="profileImage"
          type="file"
          hidden
          accept="image/*"
          onChange={handleImage}
        />

        <p className="mt-3 text-sm text-gray-500">
          Change Profile Image
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <InputField
          icon={<User size={20} />}
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          icon={<Building2 size={20} />}
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <InputField
          icon={<Mail size={20} />}
          label="Email"
          name="email"
          value={formData.email}
          readOnly
        />

        <InputField
          icon={<GraduationCap size={20} />}
          label="Student ID"
          name="studentId"
          value={formData.studentId}
          readOnly
        />
      </div>

      {error && (
        <p className="mt-6 rounded-lg bg-red-50 p-3 text-red-600">
          {error}
        </p>
      )}

      {success && (
        <p className="mt-6 rounded-lg bg-green-50 p-3 text-green-600">
          {success}
        </p>
      )}

      <button
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
};

interface InputProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  value: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  readOnly?: boolean;
}

const InputField = ({
  icon,
  label,
  name,
  value,
  onChange,
  readOnly = false,
}: InputProps) => (
  <div>
    <label className="mb-2 block font-medium">
      {label}
    </label>

    <div className="flex items-center rounded-xl border px-4">
      <span className="text-gray-400">{icon}</span>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full p-3 outline-none ${
          readOnly
            ? "cursor-not-allowed bg-gray-50 text-gray-500"
            : ""
        }`}
      />
    </div>
  </div>
);

export default EditProfileForm;