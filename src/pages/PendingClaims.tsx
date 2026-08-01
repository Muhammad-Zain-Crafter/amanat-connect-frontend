import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchPendingClaims } from "../features/admin/adminThunk";
import Loader from "../components/common/Loader";
import PendingClaimsTable from "../components/admin/PendingClaimsTable";

const PendingClaims = () => {
  const dispatch = useAppDispatch();

  const {
    pendingClaims,
    loading,
    error,
  } = useAppSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchPendingClaims());
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
    <section className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Pending Claims
            </h1>

            <p className="mt-2 text-slate-500">
              Review ownership claims submitted by students.
            </p>
          </div>

          <div className="rounded-xl bg-amber-100 px-5 py-3">
            <p className="text-sm text-amber-700">
              Pending Claims
            </p>

            <h2 className="text-2xl font-bold text-amber-800">
              {pendingClaims.length}
            </h2>
          </div>
        </div>

        <PendingClaimsTable claims={pendingClaims} />

      </div>
    </section>
  );
};

export default PendingClaims;