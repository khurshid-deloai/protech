import { Package, Star } from 'lucide-react';

export default function Products() {
  const products = [
    { id: 1, name: 'Product One', price: '$99', rating: 4.5 },
    { id: 2, name: 'Product Two', price: '$149', rating: 4.8 },
    { id: 3, name: 'Product Three', price: '$199', rating: 4.7 },
    { id: 4, name: 'Product Four', price: '$79', rating: 4.6 },
    { id: 5, name: 'Product Five', price: '$129', rating: 4.9 },
    { id: 6, name: 'Product Six', price: '$169', rating: 4.4 },
  ];

  return (
    <section id="products" className="min-h-screen bg-orange-500 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="bg-orange-300 h-48 flex items-center justify-center">
                <Package size={80} className="text-orange-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-gray-600">{product.rating}</span>
                </div>
                <p className="text-2xl font-bold text-orange-500 mb-4">{product.price}</p>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
