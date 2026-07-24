import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { getMyClaims } from "../features/claim/claimThunk";
import Loader from "../components/common/Loader";
import ClaimCard from "../components/claim/ClaimCard";

const MyClaims = () => {
  const dispatch = useAppDispatch();

  const { claims, loading, error } = useAppSelector(
    (state) => state.claim
  );

  useEffect(() => {
    dispatch(getMyClaims());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex justify-center py-24">
        <Loader />
      </div>
    );

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-8 text-4xl font-bold">
          My Claims
        </h1>

        {error && (
          <div className="mb-6 rounded-xl bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {claims.length === 0 ? (
          <div className="rounded-2xl bg-white py-20 text-center shadow">
            <h2 className="text-2xl font-semibold">
              No Claims Yet
            </h2>

            <p className="mt-3 text-gray-500">
              You haven't submitted any claims.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {claims.map((claim) => (
              <ClaimCard
                key={claim._id}
                claim={claim}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyClaims;