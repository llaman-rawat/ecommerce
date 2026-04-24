import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import About from "./Pages/About";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* GLOBAL FIX FOR FIXED NAVBAR */}
        <div className="pt-20">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>

        </div>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;