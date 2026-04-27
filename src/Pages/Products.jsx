import Navbar from "../components/NavbarTemp";
import ProductList from "../components/ProductList";
import Footer from "../components/FooterTemp";

function Products() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <ProductList />
      </div>

      <Footer />
    </div>
  );
}

export default Products;