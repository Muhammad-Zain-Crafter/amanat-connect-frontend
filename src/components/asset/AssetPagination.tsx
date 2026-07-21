import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAppSelector } from "../../hooks/useAppSelector";

interface AssetPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const AssetPagination = ({
  page,
  setPage,
}: AssetPaginationProps) => {
  // Read pagination info from Redux
  const { totalPages } = useAppSelector((state) => state.asset);

  // Don't show pagination if only one page
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex items-center justify-center gap-4">
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
        className="flex items-center gap-2 rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      <span className="font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === totalPages}
        className="flex items-center gap-2 rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default AssetPagination;