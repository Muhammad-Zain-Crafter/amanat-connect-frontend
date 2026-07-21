import { ArrowRight, Search, ShieldCheck, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            <PackageSearch size={18} />
            Campus Lost & Found Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Find.
            <span className="text-emerald-600"> Claim.</span>
            <br />
            Reconnect.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Amanat Connect helps students report, search, and recover lost
            belongings securely. Whether you've lost an item or found one,
            reconnecting with its owner is just a few clicks away.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Report Item
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/assets"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-600"
            >
              Browse Assets
              <Search size={20} />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">500+</h2>
              <p className="text-slate-600">Reported Assets</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">320+</h2>
              <p className="text-slate-600">Recovered Items</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">95%</h2>
              <p className="text-slate-600">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-emerald-200 blur-3xl opacity-50"></div>

          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
            <img
              src="https://illustrations.popsy.co/gray/digital-nomad.svg"
              alt="Lost and Found"
              className="w-96"
            />

            <div className="absolute -left-8 top-8 rounded-xl bg-white p-4 shadow-lg">
              <ShieldCheck className="text-emerald-600" size={30} />
              <p className="mt-2 text-sm font-semibold">
                Verified
                <br />
                Claims
              </p>
            </div>

            <div className="absolute -bottom-8 -right-6 rounded-xl bg-white p-4 shadow-lg">
              <Search className="text-emerald-600" size={30} />
              <p className="mt-2 text-sm font-semibold">
                Smart
                <br />
                Search
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
