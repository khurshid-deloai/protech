import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen bg-blue-500 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover amazing products and services tailored just for you
        </p>
        <button className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
