import { Search } from "lucide-react";

interface PendingAssetFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
}

const categories = [
  "All",
  "Electronics",
  "Wallet",
  "Documents",
  "ID Card",
  "Keys",
  "Bags",
  "Books",
  "Clothing",
  "Others",
];

const PendingAssetFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}: PendingAssetFiltersProps) => {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {/* Search */}

        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-emerald-500"
          />
        </div>

        {/* Category */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500"
        >
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-emerald-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title">Title (A-Z)</option>
          <option value="category">Category</option>
        </select>
      </div>
    </div>
  );
};

export default PendingAssetFilters;