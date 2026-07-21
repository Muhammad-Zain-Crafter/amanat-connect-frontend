import AssetCard from "../AssetCard";
import { useAppSelector } from "../../hooks/useAppSelector";
import Loader from "../common/Loader";


const AssetGrid = () => {
  const { assets, loading, error } = useAppSelector(
    (state) => state.asset
  );

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Something went wrong
        </h2>

        <p className="mt-3 text-slate-500">
          {error}
        </p>
      </div>
    );
  }

  if (assets.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800">
          No Assets Found
        </h2>

        <p className="mt-3 text-slate-500">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {assets.map((asset) => (
        <AssetCard
          key={asset._id}
          asset={asset}
        />
      ))}
    </div>
  );
};

export default AssetGrid;