import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { carsData, getBrands } from "../data/cars";
import CarCard from "../components/CarCard";

const PAGE_SIZE = 9;

export default function Cars() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");
  const [fuelType, setFuelType] = useState("All");
  const [sort, setSort] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const brands = ["All", ...getBrands()];
  const fuels = ["All", "Petrol", "Electric", "Hybrid"];

  const filtered = useMemo(() => {
    let list = carsData.filter(c => {
      const matchSearch = search === "" || `${c.brand} ${c.model}`.toLowerCase().includes(search.toLowerCase());
      const matchBrand = brand === "All" || c.brand === brand;
      const matchFuel = fuelType === "All" || c.fuelType === fuelType;
      const matchPrice = c.price >= priceRange[0] && c.price <= priceRange[1];
      return matchSearch && matchBrand && matchFuel && matchPrice;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "hp") list = [...list].sort((a, b) => b.horsepower - a.horsepower);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "year") list = [...list].sort((a, b) => b.year - a.year);
    return list;
  }, [search, brand, fuelType, sort, priceRange]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const clearFilters = () => {
    setSearch(""); setBrand("All"); setFuelType("All"); setSort("default"); setPriceRange([0, 5000000]); setPage(1);
  };
  const hasFilters = search || brand !== "All" || fuelType !== "All" || sort !== "default";

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-charcoal-50 dark:bg-charcoal-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent-500 font-mono text-sm uppercase tracking-widest mb-2">Inventory</p>
            <h1 className="font-display text-5xl font-bold text-charcoal-900 dark:text-white mb-2">All Cars</h1>
            <p className="text-charcoal-500 dark:text-charcoal-400">{filtered.length} vehicles available</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by brand or model..."
              className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-400 hover:text-charcoal-600">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => { setSort(e.target.value); setPage(1); }}
              className="appearance-none pl-4 pr-10 py-3.5 bg-white dark:bg-charcoal-900 border border-charcoal-200 dark:border-charcoal-700 rounded-xl text-sm focus:outline-none focus:border-accent-500 transition-colors cursor-pointer min-w-[160px]"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="hp">Horsepower</option>
              <option value="rating">Top Rated</option>
              <option value="year">Newest First</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 pointer-events-none" />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium border transition-colors ${
              showFilters ? "bg-accent-600 border-accent-600 text-white" : "bg-white dark:bg-charcoal-900 border-charcoal-200 dark:border-charcoal-700 text-charcoal-700 dark:text-charcoal-200"
            }`}
          >
            <SlidersHorizontal size={16} /> Filters
          </button>

          {hasFilters && (
            <button onClick={clearFilters} className="flex items-center gap-2 px-4 py-3.5 text-sm text-red-500 hover:text-red-600 border border-red-200 dark:border-red-900 rounded-xl transition-colors">
              <X size={14} /> Clear
            </button>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-6 bg-white dark:bg-charcoal-900 rounded-2xl border border-charcoal-100 dark:border-charcoal-800 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {/* Brand Filter */}
            <div>
              <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-3">Brand</p>
              <div className="flex flex-wrap gap-2">
                {brands.map(b => (
                  <button
                    key={b}
                    onClick={() => { setBrand(b); setPage(1); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      brand === b ? "bg-accent-600 text-white" : "bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-600 dark:text-charcoal-300 hover:bg-accent-50"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Fuel Filter */}
            <div>
              <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-3">Fuel Type</p>
              <div className="flex flex-wrap gap-2">
                {fuels.map(f => (
                  <button
                    key={f}
                    onClick={() => { setFuelType(f); setPage(1); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      fuelType === f ? "bg-accent-600 text-white" : "bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-600 dark:text-charcoal-300 hover:bg-accent-50"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <p className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider mb-3">
                Max Price: ${priceRange[1].toLocaleString()}
              </p>
              <input
                type="range"
                min={0} max={5000000} step={10000}
                value={priceRange[1]}
                onChange={(e) => { setPriceRange([0, Number(e.target.value)]); setPage(1); }}
                className="w-full accent-accent-500"
              />
              <div className="flex justify-between text-xs text-charcoal-400 mt-1">
                <span>$0</span>
                <span>$5M</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results */}
        {paginated.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-charcoal-400 text-lg mb-2">No cars found</p>
            <button onClick={clearFilters} className="text-accent-500 text-sm hover:underline">Clear filters</button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2.5 rounded-xl text-sm border border-charcoal-200 dark:border-charcoal-700 disabled:opacity-40 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 transition-colors"
                >
                  Previous
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-10 h-10 rounded-xl text-sm font-medium transition-colors ${
                      page === i + 1 ? "bg-accent-600 text-white" : "border border-charcoal-200 dark:border-charcoal-700 hover:bg-charcoal-50 dark:hover:bg-charcoal-800"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2.5 rounded-xl text-sm border border-charcoal-200 dark:border-charcoal-700 disabled:opacity-40 hover:bg-charcoal-50 dark:hover:bg-charcoal-800 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
