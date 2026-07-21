import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-16 text-center text-white shadow-2xl">
        <h2 className="text-4xl font-bold">
          Lost Something on Campus?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
          Join Amanat Connect today to report lost items,
          browse found belongings, and reconnect with your
          valuables in a secure and trusted way.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/register"
            className="rounded-xl bg-white px-7 py-3 font-semibold text-emerald-700 transition hover:scale-105"
          >
            Get Started
          </Link>

          <Link
            to="/assets"
            className="flex items-center gap-2 rounded-xl border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-emerald-700"
          >
            Browse Assets
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;