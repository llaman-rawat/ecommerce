import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList({ category }) {
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || p.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div>

      {/* SEARCH BAR */}
      <div className="flex gap-4 mb-8">

        <input
          type="text"
          placeholder="🔍 Search products..."
          className="p-3 bg-gray-900 text-white rounded-lg w-full border border-gray-700 focus:outline-none focus:border-purple-500"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* PRODUCTS GRID */}
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center">
          No products found 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}

        </div>
      )}

    </div>
  );
}

export default ProductList;