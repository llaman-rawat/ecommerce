import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="p-8 grid md:grid-cols-2 gap-8">

        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-400 mt-2">
            Category: {product.category}
          </p>

          <p className="text-2xl mt-4 text-purple-400">
            ₹ {product.price}
          </p>

          <button className="mt-6 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
            Add to Cart
          </button>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;