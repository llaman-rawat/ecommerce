import { useEffect, useState } from "react";

const slides = [
  {
    title: "Big Sale 🔥",
    desc: "Up to 50% OFF on Premium Products",
    color: "from-purple-700 to-indigo-700",
  },
  {
    title: "New Arrivals ✨",
    desc: "Fresh Fashion & Gadgets just for you",
    color: "from-pink-600 to-purple-700",
  },
  {
    title: "Gaming Zone 🎮",
    desc: "Best Gaming Gear at Lowest Price",
    color: "from-green-600 to-blue-700",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-white p-10 rounded-xl mb-8 text-center shadow-lg bg-gradient-to-r ${slides[index].color} transition-all duration-700`}
    >
      <h1 className="text-4xl font-bold mb-3">
        {slides[index].title}
      </h1>

      <p className="text-lg">{slides[index].desc}</p>

      <button className="mt-5 bg-black px-6 py-2 rounded-lg">
        Shop Now
      </button>
    </div>
  );
}

export default Slider;