import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Amanat
              <span className="text-emerald-500"> Connect</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A secure campus lost and found platform that helps students
              report, search, and recover belongings through a transparent
              verification and claim process.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 p-2 transition hover:bg-emerald-600"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-slate-800 p-2 transition hover:bg-emerald-600"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="transition hover:text-emerald-400">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/assets"
                  className="transition hover:text-emerald-400"
                >
                  Browse Assets
                </Link>
              </li>

              <li>
                <Link to="/login" className="transition hover:text-emerald-400">
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="transition hover:text-emerald-400"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Platform</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Lost Item Reporting</li>
              <li>Found Item Reporting</li>
              <li>Verified Claim System</li>
              <li>Admin Moderation</li>
              <li>Campus Asset Recovery</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-emerald-500" />

                <div>
                  <h4 className="font-semibold text-white">Institution</h4>

                  <p className="text-slate-400">
                    KIET University
                    <br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 text-emerald-500" />

                <div>
                  <h4 className="font-semibold text-white">Project</h4>

                  <p className="text-slate-400">
                    Department of Computer Science
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-10 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Amanat Connect. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
