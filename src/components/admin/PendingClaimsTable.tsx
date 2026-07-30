import { Eye, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
    approveClaim,
    rejectClaim,
} from "../../features/admin/adminThunk";

interface PendingClaimsTableProps {
    claims: any[];
}

const PendingClaimsTable = ({
    claims,
}: PendingClaimsTableProps) => {
    const dispatch = useAppDispatch();

    if (claims.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
                <h3 className="text-xl font-semibold text-slate-700">
                    No Pending Claims
                </h3>

                <p className="mt-2 text-slate-500">
                    There are currently no claims waiting for approval.
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
                            <th className="px-6 py-4">Claimant</th>
                            <th className="px-6 py-4">Proof</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {claims.map((claim) => (
                            <tr
                                key={claim._id}
                                className="border-b transition hover:bg-slate-50"
                            >
                                {/* Asset */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={
                                                claim.asset?.image?.url ||
                                                "https://placehold.co/60x60?text=No+Image"
                                            }
                                            alt={claim.asset?.title}
                                            className="h-14 w-14 rounded-xl object-cover"
                                        />

                                        <div>
                                            <p className="font-semibold text-slate-800">
                                                {claim.asset?.title}
                                            </p>

                                            <p className="text-sm text-slate-500">
                                                {claim.asset?.location}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Claimant */}
                                <td className="px-6 py-4">
                                    <div>
                                        <p className="font-medium">
                                            {claim.claimedBy?.fullName}
                                        </p>

                                        <p className="text-sm text-slate-500">
                                            {claim.claimedBy?.studentId}
                                        </p>
                                    </div>
                                </td>

                                {/* Proof */}
                                <td className="max-w-xs px-6 py-4">
                                    <p className="line-clamp-2 text-sm text-slate-600">
                                        {claim.proofDescription}
                                    </p>
                                </td>

                                {/* Date */}
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {new Date(
                                        claim.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">
                                        <Link
                                            to={`/assets/${claim.asset?._id}`}
                                            className="rounded-lg bg-slate-100 p-2 transition hover:bg-slate-200"
                                        >
                                            <Eye size={18} />
                                        </Link>

                                        <button
                                            onClick={() =>
                                                dispatch(approveClaim(claim._id))
                                            }
                                            className="rounded-lg bg-emerald-600 p-2 text-white transition hover:bg-emerald-700"
                                        >
                                            <CheckCircle size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    rejectClaim({
                                                        id: claim._id,
                                                    })
                                                )
                                            }
                                            className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
                                        >
                                            <XCircle size={18} />
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

export default PendingClaimsTable;