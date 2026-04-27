import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import Navbar from "../temp-components/Navbar";
import Footer from "../temp-components/Footer";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {/* ITEMS */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Order Items</h1>

          {cart.map(item => (
            <div key={item.id} className="bg-gray-900 p-4 mb-3 rounded flex justify-between">
              <span>{item.name} × {item.qty}</span>
              <span>₹ {item.price * item.qty}</span>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="bg-gray-900 p-6 rounded-lg h-fit">

          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Total Price</span>
            <span>₹ {total}</span>
          </div>

          <button className="w-full bg-green-600 py-3 rounded-lg">
            Place Order
          </button>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Checkout;