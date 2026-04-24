import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <div className="my-10">

      <h2 className="text-xl font-bold mb-4">🔥 Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}

export default FeaturedProducts;