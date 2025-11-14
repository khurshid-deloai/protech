import { Beaker } from 'lucide-react';

const Products = () => {
  const productCategories = [
    { name: 'Flocculants', products: ['PT-8120', 'PT-4120', 'PRO FLOTE 100', 'PT-4207', 'PT-4400', 'Magna Z7692'] },
    { name: 'Biocides', products: ['Magnacide D: Carbamates', 'Magnacide Q: Quat', 'Beta Stab 10A', 'Lacto Stab'] },
    { name: 'Enzymes', products: ['Magnazyme S: for starch', 'Magnazyme DEX: for dextran'] },
    { name: 'Decolorants', products: ['Magna LT-31', 'PRO MEL 40', 'Pro Floc LT Plus', 'PT-LCR', 'PT-LCR 1000', 'Magna Wax'] },
    { name: 'Defoamers', products: ['Magna 300', 'Magna 500', 'Magna 900', 'Magna 260', 'PT-L 122'] },
    { name: 'Viscosity Reducers', products: ['Magnasurf', 'Magnasurf 400', 'Pro Surf 70 PG'] },
    { name: 'Antiscalants', products: ['Pro Scale'] },
    { name: 'Acid Inhibitors', products: ['Magna 240', 'Magna 241'] },
    { name: 'Fondant Seeding', products: ['6XX', '10XX', '12XX'] },
    { name: 'Others', products: ['PT Ion Exchange Resins', 'Yeast', 'Phosphoric Acid'] }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-performance chemical solutions engineered for the sugar and bioethanol industries.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Beaker className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
              </div>

              <ul className="space-y-2">
                {category.products.map((product, pidx) => (
                  <li key={pidx} className="text-gray-700 text-sm flex gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-emerald-50 rounded-2xl p-10 space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Additional Products & Services</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            We also supply new and used equipment, spare parts for sugar mills and refineries, and offer engineering,
            design, and consulting services to help mills optimize performance and meet their capital project goals.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Products;