interface PendingAssetsHeaderProps {
  total: number;
  onRefresh: () => void;
}

const PendingAssetsHeader = ({
  total,
  onRefresh,
}: PendingAssetsHeaderProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Pending Assets
        </h1>

        <p className="mt-2 text-slate-500">
          {total} asset{total !== 1 && "s"} waiting for approval
        </p>
      </div>

      <button
        onClick={onRefresh}
        className="rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
      >
        Refresh
      </button>
    </div>
  );
};

export default PendingAssetsHeader;