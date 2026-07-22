import { useEffect } from "react";
import { Loader } from "lucide-react";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import { fetchMyAssets } from "../features/myAssets/myAssetsThunk";
import AssetCard from "../components/AssetCard";

const MyAssets = () => {
  const dispatch = useAppDispatch();

  const { assets, loading, error } = useAppSelector(
    (state) => state.myAssets
  );

  useEffect(() => {
    dispatch(fetchMyAssets());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Loader className="h-8 w-8 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        {error}
      </section>
    );
  }

  if (assets.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          No Reported Assets
        </h2>

        <p className="mt-3 text-gray-500">
          You haven't reported any lost or found assets yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          My Reported Assets
        </h1>

        <p className="mt-2 text-gray-500">
          View and manage all the assets you have reported.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {assets.map((asset) => (
          <AssetCard key={asset._id} asset={asset} />
        ))}
      </div>
    </section>
  );
};

export default MyAssets;