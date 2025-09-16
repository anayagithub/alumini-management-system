const alumniImages = [
  "alumini1.png",
  "alumini2.png",
  "alumini3.png",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Alumni Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {alumniImages.map((filename, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={`/alumini/${filename}`}  // ✅ use alumini here
              alt={`Alumni ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
