import { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { changePassword } from "../../features/profile/profileThunk";

interface PasswordFieldProps {
  label: string;
  name: string;
  value: string;
  visible: boolean;
  toggle: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const PasswordField = ({
  label,
  name,
  value,
  visible,
  toggle,
  onChange,
}: PasswordFieldProps) => {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
        <Lock className="text-gray-400" size={20} />

        <input
          type={visible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-3 outline-none"
        />

        <button
          type="button"
          onClick={toggle}
        >
          {visible ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();

  const { loading, error, success } =
    useAppSelector(
      (state) => state.profile
    );

  const [showCurrent, setShowCurrent] =
    useState(false);
  const [showNew, setShowNew] =
    useState(false);
  const [showConfirm, setShowConfirm] =
    useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      return;
    }

    dispatch(
      changePassword({
        currentPassword:
          formData.currentPassword,
        newPassword: formData.newPassword,
        confirmPassword:
          formData.confirmPassword,
      })
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <ShieldCheck
            className="text-emerald-600"
            size={32}
          />
        </div>

        <h2 className="text-3xl font-bold">
          Change Password
        </h2>

        <p className="mt-2 text-gray-500">
          Keep your account secure by updating
          your password.
        </p>
      </div>

      <div className="space-y-6">
        <PasswordField
          label="Current Password"
          name="currentPassword"
          value={formData.currentPassword}
          visible={showCurrent}
          toggle={() =>
            setShowCurrent((prev) => !prev)
          }
          onChange={handleChange}
        />

        <PasswordField
          label="New Password"
          name="newPassword"
          value={formData.newPassword}
          visible={showNew}
          toggle={() =>
            setShowNew((prev) => !prev)
          }
          onChange={handleChange}
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          visible={showConfirm}
          toggle={() =>
            setShowConfirm((prev) => !prev)
          }
          onChange={handleChange}
        />
      </div>

      {formData.confirmPassword &&
        formData.newPassword !==
          formData.confirmPassword && (
          <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
            Passwords do not match.
          </p>
        )}

      {error && (
        <p className="mt-6 rounded-xl bg-red-50 p-3 text-red-600">
          {error}
        </p>
      )}

      {success && (
        <p className="mt-6 rounded-xl bg-green-50 p-3 text-green-600">
          {success}
        </p>
      )}

      <button
        type="submit"
        disabled={
          loading ||
          formData.newPassword !==
            formData.confirmPassword
        }
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading
          ? "Updating Password..."
          : "Change Password"}
      </button>
    </form>
  );
};

export default ChangePasswordForm;