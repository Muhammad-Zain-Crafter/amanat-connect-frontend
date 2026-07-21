import type { Asset } from "../features/asset/assetTypes";
import {
  Calendar,
  MapPin,
  ArrowRight,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

interface AssetCardProps {
  asset: Asset;
}

const statusColors = {
  lost: "bg-red-100 text-red-600",
  found: "bg-emerald-100 text-emerald-600",
  claimed: "bg-blue-100 text-blue-600",
};

const AssetCard = ({ asset }: AssetCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img
          src={
            asset.image?.url ||
            "https://placehold.co/600x400?text=No+Image"
          }
          alt={asset.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            statusColors[asset.status]
          }`}
        >
          {asset.status.toUpperCase()}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm text-emerald-600">
            {asset.category}
          </p>

          <h3 className="mt-1 text-xl font-bold">
            {asset.title}
          </h3>
        </div>

        <div className="space-y-2 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {asset.location}
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {new Date(asset.date).toLocaleDateString()}
          </div>

          {asset.reportedBy && (
            <div className="flex items-center gap-2">
              <User size={16} />
              {asset.reportedBy.fullName}
            </div>
          )}
        </div>

        <Link
          to={`/assets/${asset._id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          View Details
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default AssetCard;