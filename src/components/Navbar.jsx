import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-lg border-b border-gray-800 fixed top-0 left-0 w-full z-50">

      {/* LOGO */}
      <h1 className="text-2xl font-bold text-purple-500">
        MyShop
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-white"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-500" : "text-gray-300 hover:text-white"
          }
        >
          About
        </NavLink>

      </div>

      {/* CART + HAMBURGER */}
      <div className="flex items-center gap-4">

        <Link to="/cart">
          <div className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            🛒 ({cart.length})
          </div>
        </Link>

        {/* HAMBURGER ICON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 md:hidden">

          <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/products">Products</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>

        </div>
      )}

    </div>
  );
}

export default Navbar;