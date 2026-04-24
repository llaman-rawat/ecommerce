function Newsletter() {
  return (
    <div className="my-10 bg-gradient-to-r from-purple-700 to-indigo-700 p-8 rounded-xl text-center">

      <h2 className="text-2xl font-bold mb-2">
        Get 10% OFF on your first order
      </h2>

      <p className="mb-4">
        Subscribe to our newsletter
      </p>

      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter email"
          className="p-2 rounded-lg text-black"
        />

        <button className="bg-black px-4 py-2 rounded-lg">
          Subscribe
        </button>
      </div>

    </div>
  );
}

export default Newsletter;