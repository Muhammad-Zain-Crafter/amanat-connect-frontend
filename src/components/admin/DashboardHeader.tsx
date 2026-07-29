const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Admin Dashboard
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-gray-500">
            Manage campus assets, approve reports and monitor
            claim requests.
          </p>

        </div>

        <div className="rounded-2xl border bg-slate-50 px-6 py-4">

          <p className="text-sm text-gray-500">
            Today
          </p>

          <h3 className="mt-1 font-semibold">
            {today}
          </h3>

        </div>

      </div>

    </div>
  );
};

export default DashboardHeader;