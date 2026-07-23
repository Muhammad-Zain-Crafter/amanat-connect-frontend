import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ShieldQuestion } from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  clearProfileMessage,
} from "../../features/profile/profileSlice";
import { forgotPassword } from "../../features/profile/profileThunk";
const ForgotPasswordForm = () => {
  const dispatch = useAppDispatch();

  const { loading, success, error } = useAppSelector(
    (state) => state.profile
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(clearProfileMessage());

    dispatch(forgotPassword({ email }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      {/* Header */}

      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <ShieldQuestion
            size={30}
            className="text-emerald-600"
          />
        </div>

        <h2 className="text-3xl font-bold">
          Forgot Password
        </h2>

        <p className="mt-2 text-gray-500">
          Enter your registered email address.
          <br />
          We'll send you a password reset link.
        </p>
      </div>

      {/* Email */}

      <div>
        <label className="mb-2 block font-medium">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
          <Mail
            size={20}
            className="text-gray-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-3 outline-none"
          />
        </div>
      </div>

      {/* Error */}

      {error && (
        <p className="mt-6 rounded-xl bg-red-50 p-3 text-red-600">
          {error}
        </p>
      )}

      {/* Success */}

      {success && (
        <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700">
          <p className="font-semibold">
            {success}
          </p>

          <p className="mt-1 text-sm">
            Please check your inbox and spam
            folder. The reset link expires in
            15 minutes.
          </p>
        </div>
      )}

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-emerald-600 py-3 text-lg font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading
          ? "Sending..."
          : "Send Reset Link"}
      </button>

      {/* Footer */}

      <p className="mt-6 text-center text-gray-600">
        Remember your password?{" "}
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

export default ForgotPasswordForm;