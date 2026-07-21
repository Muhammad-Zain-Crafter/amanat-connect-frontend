import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { loginUser } from "../../features/auth/authThunk";

import Loader from "../common/Loader";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    dispatch(loginUser(formData));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 shadow-lg"
    >
      {/* Email */}

      <div className="mb-6">
        <label className="mb-2 block font-medium">
          Email Address
        </label>

        <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
          <Mail className="text-gray-400" size={20} />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-none bg-transparent p-3 outline-none"
            required
          />
        </div>
      </div>

      {/* Password */}

      <div className="mb-4">
        <label className="mb-2 block font-medium">
          Password
        </label>

        <div className="flex items-center rounded-xl border px-4 focus-within:border-emerald-600">
          <Lock className="text-gray-400" size={20} />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-none bg-transparent p-3 outline-none"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Forgot Password */}

      <div className="mb-5 text-right">
        <Link
          to="/forgot-password"
          className="text-sm text-emerald-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Error */}

      {error && (
        <div className="mb-5 rounded-xl bg-red-100 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? <Loader /> : "Login"}
      </button>

      {/* Register */}

      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-emerald-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;