export default function ProductsSection() {
  const images = [
    "/mockup5.png",
    "/mockup2.png",
    "/mockup3.png",
  ];

  return (
    <section className="w-full relative">

      <div
        className="mx-auto px-6 py-16 bg-gradient-to-br from-[#00003f] via-[#1206b6] to-[#4508c0]"
      >

        {/* TITLE */}
        <h2 className="text-3xl md:text-2xl font-semibold text-center text-white mb-12">
          Some of our products
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {images.map((src, i) => (
            <div
              key={i}
              className="group backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`mockup-${i}`}
                  className="w-full h-[260px] object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>

            </div>
          ))}

        </div>
{/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">

          {images.map((src, i) => (
            <div
              key={i}
              className="group backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt={`mockup-${i}`}
                  className="w-full h-[260px] object-cover transform transition duration-500 group-hover:scale-110"
                />
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}