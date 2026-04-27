import Navbar from "../temp-components/Navbar";
import Footer from "../temp-components/Footer";

function About() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="p-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>

        <p className="text-gray-400 leading-7">
          Welcome to MyShop — your one-stop destination for premium products.
          We provide high-quality fashion, electronics, and gaming accessories
          at the best prices.
        </p>

        <p className="text-gray-400 mt-4">
          Our mission is to deliver a smooth and enjoyable shopping experience.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default About;