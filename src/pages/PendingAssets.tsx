import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchPendingAssets } from "../features/admin/adminThunk";
import Loader from "../components/common/Loader";
import PendingAssetsTable from "../components/admin/PendingAssetsTable";

const PendingAssets = () => {
  const dispatch = useAppDispatch();

  const { pendingAssets, loading, error } = useAppSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(fetchPendingAssets());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Pending Assets
          </h1>

          <p className="mt-2 text-slate-500">
            Review and approve newly reported lost & found assets.
          </p>
        </div>

        <PendingAssetsTable assets={pendingAssets} />
      </div>
    </section>
  );
};

export default PendingAssets;