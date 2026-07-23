import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  PackageSearch,
  LogOut,
  PlusCircle,
  ChevronDown,
  User,
  Pencil,
  FolderOpen,
  KeyRound,
} from "lucide-react";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { logoutUser } from "../features/auth/authThunk";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await dispatch(logoutUser());

    navigate("/");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors ${
      isActive
        ? "font-semibold text-emerald-600"
        : "text-gray-700 hover:text-emerald-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-emerald-600 md:text-2xl"
        >
          <PackageSearch size={30} />
          <span>Amanat Connect</span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/assets" className={navLinkClass}>
            Browse Assets
          </NavLink>
        </div>

        {/* Right Side */}

        <div className="hidden items-center gap-4 md:flex">
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/report-asset"
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700"
              >
                <PlusCircle size={18} />
                Report Asset
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 rounded-full border px-3 py-2 transition hover:bg-gray-50"
                >
                  <img
                    src={
                      user?.profileImage?.url ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user?.fullName || "User",
                      )}`
                    }
                    alt={user?.fullName}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div className="text-left">
                    <p className="text-sm font-semibold">{user?.fullName}</p>

                    <p className="text-xs capitalize text-gray-500">
                      {user?.role}
                    </p>
                  </div>

                  <ChevronDown size={18} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border bg-white shadow-xl">
                    <div className="border-b p-4">
                      <p className="font-semibold">{user?.fullName}</p>

                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    <Link
                      to="/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <User size={18} />
                      My Profile
                    </Link>

                    <Link
                      to="/profile/edit"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <Pencil size={18} />
                      Edit Profile
                    </Link>

                    <Link
                      to="/my-assets"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FolderOpen size={18} />
                      My Assets
                    </Link>

                    <Link
                      to="/change-password"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <KeyRound size={18} />
                      Change Password
                    </Link>

                    <Link
                      to="/report-asset"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <PlusCircle size={18} />
                      Report Asset
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 border-t px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col p-4">
            <NavLink
              to="/"
              className="rounded-md px-3 py-3 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/assets"
              className="rounded-md px-3 py-3 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Assets
            </NavLink>

            <hr className="my-3" />

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="rounded-md px-3 py-3 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="mt-2 rounded-lg bg-emerald-600 px-3 py-3 text-center text-white hover:bg-emerald-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* User */}

                <div className="mb-4 flex items-center gap-3 rounded-xl border p-3">
                  <img
                    src={
                      user?.profileImage?.url ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user?.fullName || "User",
                      )}`
                    }
                    alt={user?.fullName}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">{user?.fullName}</h3>

                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100"
                >
                  <User size={18} />
                  My Profile
                </Link>

                <Link
                  to="/edit-profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100"
                >
                  <Pencil size={18} />
                  Edit Profile
                </Link>

                <Link
                  to="/my-assets"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100"
                >
                  <FolderOpen size={18} />
                  My Assets
                </Link>

                <Link
                  to="/change-password"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100"
                >
                  <KeyRound size={18} />
                  Change Password
                </Link>

                <Link
                  to="/report-asset"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-3 text-white hover:bg-emerald-700"
                >
                  <PlusCircle size={18} />
                  Report Asset
                </Link>

                <button
                  onClick={handleLogout}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-red-200 px-3 py-3 text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
