const reviews = [
  { name: "Aman", text: "Amazing quality products!", rating: "⭐⭐⭐⭐⭐" },
  { name: "Riya", text: "Fast delivery and great UI!", rating: "⭐⭐⭐⭐" },
  { name: "Karan", text: "Loved the shopping experience.", rating: "⭐⭐⭐⭐⭐" },
];

function Reviews() {
  return (
    <div className="my-10">

      <h2 className="text-xl font-bold mb-4">⭐ Customer Reviews</h2>

      <div className="grid md:grid-cols-3 gap-4">

        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-900 p-4 rounded-lg">

            <p className="text-yellow-400">{r.rating}</p>
            <p className="mt-2 text-gray-300">{r.text}</p>
            <h3 className="mt-3 font-bold">{r.name}</h3>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Reviews;