function CategorySection({ setCategory }) {
  return (
    <div className="my-8">

      <h2 className="text-xl font-bold mb-4">Shop by Category</h2>

      <div className="flex flex-wrap gap-4">

        <button
          onClick={() => setCategory("All")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-purple-600"
        >
          All
        </button>

        <button
          onClick={() => setCategory("Shoes")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-purple-600"
        >
          Shoes
        </button>

        <button
          onClick={() => setCategory("Fashion")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-purple-600"
        >
          Fashion
        </button>

        <button
          onClick={() => setCategory("Gaming")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-purple-600"
        >
          Gaming
        </button>

        <button
          onClick={() => setCategory("Electronics")}
          className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-purple-600"
        >
          Electronics
        </button>

      </div>

    </div>
  );
}

export default CategorySection;