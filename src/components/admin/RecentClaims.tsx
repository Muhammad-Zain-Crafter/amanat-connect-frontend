import { User, CalendarDays, Package } from "lucide-react";

interface RecentClaimsProps {
  claims: any[];
}

const RecentClaims = ({ claims }: RecentClaimsProps) => {
  if (!claims.length) {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-bold">Recent Claims</h2>

        <div className="rounded-2xl border border-dashed border-slate-300 py-12 text-center">
          <p className="text-slate-500">No claims submitted yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">Recent Claims</h2>

      <div className="space-y-4">
        {claims.map((claim) => (
          <div
            key={claim._id}
            className="flex items-center justify-between rounded-2xl border p-4 transition hover:bg-slate-50"
          >
            <div className="space-y-2">
              {/* Asset */}
              <div className="flex items-center gap-2">
                <Package size={16} className="text-emerald-600" />
                <p className="font-semibold text-slate-800">
                  {claim.asset?.title || "Deleted Asset"}
                </p>
              </div>

              {/* Student */}
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <User size={15} />
                <span>
                  {claim.claimedBy?.fullName}
                  {claim.claimedBy?.studentId &&
                    ` (${claim.claimedBy.studentId})`}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CalendarDays size={15} />
                <span>
                  {new Date(claim.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold capitalize ${
                claim.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : claim.status === "pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {claim.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentClaims;