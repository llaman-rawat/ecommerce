import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";

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