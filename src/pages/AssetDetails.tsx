import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAssetById } from "../features/singleAsset/singleAssetThunk";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Loader from "../components/common/Loader";

const AssetDetails = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { asset, loading, error } = useAppSelector(
    (state) => state.singleAsset,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchAssetById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div className="py-20 text-center text-red-500">{error}</div>;
  }
  if (!asset) {
    return <div className="py-20 text-center">Asset not found.</div>;
  }
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <Link
          to="/assets"
          className="mb-8 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft size={20} />
          Back to Browse Assets
        </Link>

        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-lg lg:grid-cols-2">
          {/* Image */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img
                src={
                  asset.image?.url ||
                  "https://placehold.co/700x500?text=No+Image"
                }
                alt={asset.title}
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}

          <div className="space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold text-slate-900">
                  {asset.title}
                </h1>

                <p className="mt-2 text-slate-500">
                  Complete information about this reported asset.
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  asset.status === "lost"
                    ? "bg-red-100 text-red-600"
                    : asset.status === "found"
                      ? "bg-green-100 text-green-600"
                      : "bg-blue-100 text-blue-600"
                }`}
              >
                {asset.status.toUpperCase()}
              </span>
            </div>

            {/* Information Card */}

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="mb-5 text-xl font-semibold">Asset Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{asset.category}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium capitalize">{asset.status}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{asset.location}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Reported Date</p>
                  <p className="font-medium">
                    {new Date(asset.date).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Contact Number</p>
                  <p className="font-medium">{asset.contactNumber}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Reported By</p>

                  <p className="font-medium">
                    {asset.reportedBy?.fullName || "Unknown"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Student ID</p>

                  <p className="font-medium">
                    {asset.reportedBy?.studentId || "-"}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="mb-3 text-xl font-semibold">Description</h2>

              <p className="leading-8 text-gray-600">{asset.description}</p>
            </div>

            {/* Action */}

            <div className="rounded-2xl border border-slate-200 p-6">
              <h2 className="mb-2 text-xl font-semibold">Claim Status</h2>

              {asset.status === "found" && (
                <>
                  <p className="mb-5 text-gray-600">
                    This item is available to claim. Only the rightful owner
                    should submit a claim.
                  </p>

                  <button className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white hover:bg-emerald-700">
                    Claim This Asset
                  </button>
                </>
              )}

              {asset.status === "lost" && (
                <>
                  <p className="mb-5 text-gray-600">
                    This asset has been reported as lost.
                  </p>

                  <button
                    disabled
                    className="w-full cursor-not-allowed rounded-xl bg-gray-200 py-4"
                  >
                    Lost Item
                  </button>
                </>
              )}

              {asset.status === "claimed" && (
                <>
                  <p className="mb-5 text-gray-600">
                    This asset has already been claimed successfully.
                  </p>

                  <button
                    disabled
                    className="w-full cursor-not-allowed rounded-xl bg-blue-100 py-4 font-semibold text-blue-700"
                  >
                    Already Claimed
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetDetails;
