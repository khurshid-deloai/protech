import { useState, useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/11466855/pexels-photo-11466855.jpeg",
  "https://images.pexels.com/photos/11942833/pexels-photo-11942833.jpeg",
  "https://images.pexels.com/photos/6165053/pexels-photo-6165053.jpeg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden z-0"
    >
      {/* Slider images */}
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out w-full h-full absolute inset-0 z-0"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Text Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 z-20">
        <h1
          className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-5 drop-shadow-md leading-snug"
          style={{ fontFamily: 'Calibri, sans-serif', maxWidth: '900px' }}
        >
          Empowering the Global Sugar Industry <br />
          with Innovation, Chemistry and <br />
          Engineering Excellence
        </h1>

        <button
          className="
            bg-green-500 
            text-white 
            px-5 py-2
            rounded-full 
            font-semibold 
            text-base sm:text-lg 
            transition-all 
            duration-300 
            shadow-md
            hover:bg-green-600
            hover:shadow-lg
            active:scale-[0.98]
          "
        >
          Explore Our Solutions
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
