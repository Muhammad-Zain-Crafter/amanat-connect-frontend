import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import useDebounce from "../hooks/useDebounce";
import { fetchAssets } from "../features/asset/assetThunk";
import AssetSearch from "../components/asset/AssetSearch";
import AssetGrid from "../components/asset/AssetGrid";
import AssetPagination from "../components/asset/AssetPagination";

const Assets = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    dispatch(
      fetchAssets({
        page,
        search: debouncedSearch,
      }),
    );
  }, [dispatch, page, debouncedSearch]);

  return (
    <section className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Browse Campus Assets
          </h1>

          <p className="mt-2 text-slate-600">
            Search and explore all approved lost and found items reported by
            students.
          </p>
        </div>

        {/* Search */}
        <AssetSearch search={search} setSearch={setSearch} />
        <AssetGrid />
        <AssetPagination page={page} setPage={setPage} />
      </div>
    </section>
  );
};

export default Assets;
