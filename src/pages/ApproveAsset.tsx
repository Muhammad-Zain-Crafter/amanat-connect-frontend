import { useEffect } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Loader from "../components/common/Loader";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchAssetById } from "../features/singleAsset/singleAssetThunk";
import { approveAsset } from "../features/admin/adminThunk";

const ApproveAsset = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { asset, loading, error } = useAppSelector(
    (state) => state.singleAsset
  );

  const { loading: approving } = useAppSelector(
    (state) => state.admin
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchAssetById(id));
    }
  }, [dispatch, id]);

  const handleApprove = async () => {
    if (!asset) return;

    const result = await dispatch(approveAsset(asset._id));

    if (approveAsset.fulfilled.match(result)) {
      navigate("/admin/pending-assets");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-24">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!asset) {
    return (
      <div className="py-20 text-center">
        Asset not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back */}

        <Link
          to="/admin/pending-assets"
          className="mb-8 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
        >
          <ArrowLeft size={20} />
          Back to Pending Assets
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left */}

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            <img
              src={asset.image.url}
              alt={asset.title}
              className="h-[450px] w-full object-cover"
            />
          </div>

          {/* Right */}

          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">
                    {asset.title}
                  </h1>

                  <p className="mt-1 text-gray-500">
                    Review this asset before approving it.
                  </p>
                </div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    asset.status === "lost"
                      ? "bg-red-100 text-red-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  {asset.status.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-sm text-gray-500">
                    Category
                  </p>
                  <p className="font-semibold">
                    {asset.category}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>
                  <p className="font-semibold">
                    {asset.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Contact
                  </p>
                  <p className="font-semibold">
                    {asset.contactNumber}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Reported Date
                  </p>
                  <p className="font-semibold">
                    {new Date(asset.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-2 text-lg font-semibold">
                  Description
                </h2>

                <p className="leading-7 text-gray-600">
                  {asset.description}
                </p>
              </div>
            </div>

            {/* Reporter */}

            <div className="rounded-3xl bg-white p-8 shadow">
              <h2 className="mb-5 text-xl font-bold">
                Reporter Information
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Full Name
                  </p>

                  <p className="font-semibold">
                    {asset.reportedBy.fullName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Student ID
                  </p>

                  <p className="font-semibold">
                    {asset.reportedBy.studentId}
                  </p>
                </div>
              </div>
            </div>

            {/* Approve */}

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
              <h2 className="mb-3 text-xl font-bold text-emerald-700">
                Approve Asset
              </h2>

              <p className="mb-6 text-gray-600">
                Once approved, this asset will become visible to
                students and can receive claim requests.
              </p>

              <button
                onClick={handleApprove}
                disabled={approving}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <CheckCircle size={20} />

                {approving
                  ? "Approving..."
                  : "Approve Asset"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproveAsset;