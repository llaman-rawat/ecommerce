import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (e) => {
    e.preventDefault();

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-purple-500/30 hover:scale-105 transition duration-300">

        {/* IMAGE (FIXED SIZE) */}
        <div className="h-40 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4">

          <h2 className="text-base font-semibold truncate">
            {product.name}
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            ₹ {product.price}
          </p>

          <button
            onClick={addToCart}
            className="mt-3 w-full bg-purple-600 hover:bg-purple-700 text-sm py-2 rounded-lg"
          >
            Add to Cart
          </button>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;