import {
  Users,
  Package,
  CircleAlert,
  SearchCheck,
  BadgeCheck,
  Clock3,
  ClipboardList,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import StatsCard from "./StatsCard";

const StatsGrid = ({ stats }: any) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      <StatsCard
        title="Total Users"
        value={stats.totalUsers}
        icon={Users}
        color="bg-blue-500"
      />

      <StatsCard
        title="Total Assets"
        value={stats.totalAssets}
        icon={Package}
        color="bg-violet-500"
      />

      <StatsCard
        title="Lost Assets"
        value={stats.totalLostAssets}
        icon={CircleAlert}
        color="bg-red-500"
      />

      <StatsCard
        title="Found Assets"
        value={stats.totalFoundAssets}
        icon={SearchCheck}
        color="bg-emerald-500"
      />

      <StatsCard
        title="Claimed Assets"
        value={stats.totalClaimedAssets}
        icon={BadgeCheck}
        color="bg-indigo-500"
      />

      <StatsCard
        title="Pending Assets"
        value={stats.pendingAssets}
        icon={Clock3}
        color="bg-orange-500"
      />

      <StatsCard
        title="Pending Claims"
        value={stats.pendingClaims}
        icon={ClipboardList}
        color="bg-yellow-500"
      />

      <StatsCard
        title="Approved Claims"
        value={stats.approvedClaims}
        icon={CheckCircle2}
        color="bg-green-500"
      />

      <StatsCard
        title="Rejected Claims"
        value={stats.rejectedClaims}
        icon={XCircle}
        color="bg-rose-500"
      />

    </div>
  );
};

export default StatsGrid;