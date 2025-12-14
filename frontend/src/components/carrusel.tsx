import { useState, useEffect } from "react";

const Carrusel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "../../src/images/images-home/carrucel/1.png",
    "../../src/images/images-home/carrucel/2.png",
    "../../src/images/images-home/carrucel/3.png",
    "../../src/images/images-home/carrucel/user.png",
    "../../src/images/images-home/carrucel/user.png",
    "../../src/images/images-home/carrucel/user.png",
    "../../src/images/images-home/carrucel/user.png",
    "../../src/images/images-home/carrucel/user.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => setIndex((i) => (i + 1) % images.length);
  const prevImage = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto pt-8 pb-8">
      <div className="overflow-hidden relative rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Imagen ${i + 1}`}
              className="w-full h-[400px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <button
        onClick={prevImage}
        aria-label="Imagen anterior"
        className="absolute left-[20px] top-1/2 transform -translate-y-1/2 bg-white/60 text-black p-2 rounded-full hover:bg-white transition"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        aria-label="Siguiente imagen"
        className="absolute right-[20px] top-1/2 transform -translate-y-1/2 bg-white/60 text-black p-2 rounded-full hover:bg-white transition"
      >
        &#10095;
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-blue-700 w-5" : "bg-gray-400"
            }`}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
