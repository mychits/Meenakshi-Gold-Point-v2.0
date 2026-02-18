import { useEffect, useState } from "react";

const slides = [
     {
    image: "src/assets/6.png",
    title: "Safe & Secure Gold Selling",
  },
  {
    image: "src/assets/1.png",
    title: "Meenakshi Gold Point",  
  },
  {
    image: "src/assets/2.png",
    title: "Best Gold Price",
  },
  {
    image: "src/assets/3.png",
    title: "Safe & Secure Gold Selling",
  },
   {
    image: "src/assets/9.png",
    title: "Safe & Secure Gold Selling",
  },
   {
    image: "src/assets/11.png",
    title: "Safe & Secure Gold Selling",
  },
 
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[calc(72vh-4rem)] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Light overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white text-4xl px-4 py-2 rounded hover:bg-black/70"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white text-4xl px-4 py-2 rounded hover:bg-black/70"
      >
        ›
      </button>
    </section>
  );
}
