const RecentAssets = ({ assets }: any) => {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Recent Assets
      </h2>

      <div className="space-y-4">

        {assets.map((asset: any) => (
          <div
            key={asset._id}
            className="flex items-center justify-between rounded-2xl border p-4 hover:bg-slate-50"
          >
            <div>

              <h3 className="font-semibold">
                {asset.title}
              </h3>

              <p className="text-sm text-gray-500">
                {asset.reportedBy.fullName}
              </p>

            </div>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-600 capitalize">
              {asset.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentAssets;