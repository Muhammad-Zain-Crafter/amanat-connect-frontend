import { Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { approveAsset } from "../../features/admin/adminThunk";
import type { Asset } from "../../features/asset/assetTypes";

interface PendingAssetsTableProps {
  assets: Asset[];
}

const PendingAssetsTable = ({
  assets,
}: PendingAssetsTableProps) => {
  const dispatch = useAppDispatch();

  const handleApprove = (id: string) => {
    const confirmApprove = window.confirm(
      "Approve this asset?"
    );

    if (!confirmApprove) return;

    dispatch(approveAsset(id));
  };

  if (assets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
        <h3 className="text-xl font-semibold text-slate-700">
          No Pending Assets
        </h3>

        <p className="mt-2 text-slate-500">
          All reported assets have already been reviewed.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b bg-slate-100">
            <tr className="text-left text-sm font-semibold text-slate-700">
              <th className="px-6 py-4">Asset</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Reported By</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset._id}
                className="border-b transition hover:bg-slate-50"
              >
                {/* Asset */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={asset.image.url}
                      alt={asset.title}
                      className="h-14 w-14 rounded-xl object-cover"
                    />

                    <div>
                      <p className="font-semibold text-slate-800">
                        {asset.title}
                      </p>

                      <p className="text-sm text-slate-500">
                        {asset.location}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {asset.category}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      asset.status === "lost"
                        ? "bg-red-100 text-red-700"
                        : asset.status === "found"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-indigo-100 text-indigo-700"
                    }`}
                  >
                    {asset.status}
                  </span>
                </td>

                {/* Reporter */}
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">
                      {asset.reportedBy?.fullName}
                    </p>

                    <p className="text-sm text-slate-500">
                      {asset.reportedBy?.studentId}
                    </p>
                  </div>
                </td>

                {/* Date */}
                <td className="px-6 py-4 text-sm text-slate-600">
                  {new Date(
                    asset.createdAt
                  ).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <Link
                      to={`/assets/${asset._id}`}
                      className="rounded-lg bg-slate-100 p-2 transition hover:bg-slate-200"
                    >
                      <Eye size={18} />
                    </Link>

                    <button
                      onClick={() =>
                        handleApprove(asset._id)
                      }
                      className="rounded-lg bg-emerald-600 p-2 text-white transition hover:bg-emerald-700"
                    >
                      <CheckCircle size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssetsTable;