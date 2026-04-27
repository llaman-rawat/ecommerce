import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Navbar from "../components/NavbarTemp";
import Footer from "../components/FooterTemp";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  // ✅ Remove item
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // ✅ Calculate total
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="p-6 max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="space-y-4">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-900 p-4 rounded-lg shadow"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-400">
                      ₹ {item.price} × {item.qty}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="font-bold">
                      ₹ {item.price * item.qty}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL + CHECKOUT */}
            <div className="mt-8 border-t border-gray-700 pt-6">

              <h2 className="text-2xl font-bold mb-4">
                Total: ₹ {total}
              </h2>

              <Link to="/checkout">
                <button className="w-full bg-green-600 py-3 rounded-lg hover:bg-green-700 transition">
                  Proceed to Checkout
                </button>
              </Link>

            </div>
          </>
        )}

      </div>

      <Footer />
    </div>
  );
}

export default Cart;