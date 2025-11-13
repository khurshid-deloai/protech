import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.pexels.com/photos/11466855/pexels-photo-11466855.jpeg",
  "https://images.pexels.com/photos/11942833/pexels-photo-11942833.jpeg",
  "https://images.pexels.com/photos/6165053/pexels-photo-6165053.jpeg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-[1500ms] ease-in-out w-full h-full"
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

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 z-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
          Welcome to Our Platform
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto drop-shadow-md">
          Discover amazing products and services tailored just for you
        </p>
        <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-md">
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
