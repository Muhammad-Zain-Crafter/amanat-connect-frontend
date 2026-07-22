import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PackageSearch, LogOut, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { logoutUser } from "../features/auth/authThunk";
import { useAppSelector } from "../hooks/useAppSelector";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

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

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/assets" className={navLinkClass}>
            Browse Assets
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
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

              <Link
                to="/my-assets"
                className="rounded-lg border border-emerald-600 px-4 py-2 font-medium text-emerald-600 transition hover:bg-emerald-50"
              >
                My Assets
              </Link>

              <div className="flex items-center gap-3 rounded-full border px-3 py-2">
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

                <div>
                  <p className="text-sm font-semibold">{user?.fullName}</p>
                  <p className="text-xs capitalize text-gray-500">
                    {user?.role}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>
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
              className="rounded-md px-2 py-3 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/assets"
              className="rounded-md px-2 py-3 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Assets
            </NavLink>

            <NavLink
              to="/about"
              className="rounded-md px-2 py-3 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>

            <hr className="my-3" />

            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="rounded-md px-2 py-3 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="mt-2 rounded-md bg-emerald-600 px-2 py-3 text-center text-white hover:bg-emerald-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={
                      user?.profileImage?.url ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user?.fullName || "User",
                      )}`
                    }
                    alt={user?.fullName}
                    className="h-12 w-12 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold">{user?.fullName}</p>

                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                <Link
                  to="/report-asset"
                  className="rounded-md bg-emerald-600 px-2 py-3 text-center text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Report Asset
                </Link>
                <Link
                  to="/my-assets"
                  className="mt-2 rounded-md border border-emerald-600 px-2 py-3 text-center text-emerald-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Assets
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50"
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
