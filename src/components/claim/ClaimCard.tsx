import { Link } from "react-router-dom";
import { CalendarDays, Tag } from "lucide-react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteClaim } from "../../features/claim/claimThunk";

interface ClaimCardProps {
  claim: any;
}

const ClaimCard = ({ claim }: ClaimCardProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this claim?"
    );

    if (!confirmed) return;

    dispatch(deleteClaim(claim._id));
  };

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <img
        src={
          claim.asset?.image?.url ||
          "https://placehold.co/600x400?text=No+Image"
        }
        alt={claim.asset?.title}
        loading="lazy"
        className="h-56 w-full object-cover"
      />

      <div className="space-y-5 p-6">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold">
              {claim.asset?.title}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-gray-500">
              <Tag size={16} />

              {claim.asset?.category}
            </div>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              claim.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : claim.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {claim.status.toUpperCase()}
          </span>
        </div>

        {/* Proof */}

        <div>
          <p className="mb-2 font-semibold">
            Proof Description
          </p>

          <p className="line-clamp-3 text-sm leading-7 text-gray-600">
            {claim.proofDescription}
          </p>
        </div>

        {/* Submitted */}

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} />

          Submitted on{" "}
          {new Date(
            claim.createdAt
          ).toLocaleDateString()}
        </div>

        {/* Admin Note */}

        {claim.adminNote && (
          <div className="rounded-xl bg-red-50 p-4">
            <p className="font-semibold text-red-600">
              Admin Note
            </p>

            <p className="mt-2 text-sm text-red-500">
              {claim.adminNote}
            </p>
          </div>
        )}

        {/* Buttons */}

        <div className="flex gap-3">
          <Link
            to={`/assets/${claim.asset?._id}`}
            className="flex-1 rounded-xl border border-emerald-600 py-3 text-center font-semibold text-emerald-600 transition hover:bg-emerald-50"
          >
            View Asset
          </Link>

          {claim.status === "pending" && (
            <button
              onClick={handleDelete}
              className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Cancel Claim
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimCard;