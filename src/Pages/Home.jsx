import { useState } from "react";

import Navbar from "../components/NavbarTemp";
import Slider from "../components/Slider";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductList from "../components/ProductList";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";
import Footer from "../components/FooterTemp";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div className="bg-black min-h-screen text-white">

      {/* FIX: spacing for fixed navbar */}
      <div className="pt-20">

        <Navbar />

        <div className="p-6">

          {/* HERO SLIDER */}
          <Slider />

          {/* CATEGORY SECTION */}
         <CategorySection setCategory={setCategory} />

          {/* FEATURED PRODUCTS */}
          <FeaturedProducts />

          {/* ALL PRODUCTS TITLE */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            🛍️ All Products
          </h2>

          {/* PRODUCTS LIST */}
          <ProductList category={category} />

          {/* REVIEWS */}
          <Reviews />

          {/* NEWSLETTER */}
          <Newsletter />

        </div>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  );
}

export default Home;