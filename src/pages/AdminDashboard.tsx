import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchDashboardStats } from "../features/admin/adminThunk";
import Loader from "../components/common/Loader";
import DashboardHeader from "../components/admin/DashboardHeader";
import StatsGrid from "../components/admin/StatsGrid";
import RecentAssets from "../components/admin/RecentAssets";

const AdminDashboard = () => {
  const dispatch = useAppDispatch();

  const { dashboardStats, loading, error } = useAppSelector(
    (state) => state.admin
  );

  useEffect(() => {
    dispatch(fetchDashboardStats());
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

  if (!dashboardStats) return null;

  return (
    <section className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-6">

        <DashboardHeader />

        <div className="mt-8">
          <StatsGrid stats={dashboardStats} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <RecentAssets
            assets={dashboardStats.recentAssets}
          />

         

        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;