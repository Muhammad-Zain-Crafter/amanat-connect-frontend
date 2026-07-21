import { Search } from "lucide-react";

interface AssetSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const AssetSearch = ({ search, setSearch }: AssetSearchProps) => {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search by title, category or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-emerald-500"
        />
      </div>
    </div>
  );
};

export default AssetSearch;
