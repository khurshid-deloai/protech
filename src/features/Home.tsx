import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const images = [
  "https://t3.ftcdn.net/jpg/08/87/00/22/240_F_887002253_7vYldtTibql0W7VEXmhIYrgMqYjJPptL.jpg",
  "https://media.gettyimages.com/id/157309506/photo/sugar-cane-plantation.jpg?s=612x612&w=0&k=20&c=shTlCdA4kNzXlVoClkEkX9qCACCtdZ2PtJg2R4HO5vI=",
  "https://t3.ftcdn.net/jpg/03/17/68/54/240_F_317685441_KPojhbRZoKnnc0a27dMAMS1sgqVwGvCR.jpg",
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
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background images with smooth fade */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Welcome to Our Platform
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Discover amazing products and services tailored just for you
        </p>
        <button className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-md">
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
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
