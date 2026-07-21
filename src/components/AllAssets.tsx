import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAppSelector } from "../hooks/useAppSelector";
import AssetCard from "./AssetCard";
import Loader from "./common/Loader";


const AllAssets = () => {
  const { assets, loading, error } = useAppSelector((state) => state.asset);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Something went wrong
        </h2>

        <p className="mt-2 text-gray-500">{error}</p>
      </section>
    );
  }

  if (assets.length === 0) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          No Assets Found
        </h2>

        <p className="mt-3 text-slate-500">
          There are currently no approved assets available.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            Campus Lost & Found
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Browse Recent Assets
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore recently approved lost and found items reported by
            students. Help reunite valuable belongings with their rightful
            owners.
          </p>
        </div>

        {/* Asset Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assets.slice(0, 8).map((asset) => (
            <AssetCard key={asset._id} asset={asset} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/assets"
            className="flex items-center gap-2 rounded-xl border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 transition duration-300 hover:bg-emerald-600 hover:text-white"
          >
            View All Assets
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllAssets;