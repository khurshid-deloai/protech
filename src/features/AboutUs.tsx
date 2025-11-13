import { Building2, Globe, TrendingUp, Heart } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { icon: Building2, value: '15+', label: 'Years in Business' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: TrendingUp, value: '10K+', label: 'Happy Clients' },
    { icon: Heart, value: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about-us" className="min-h-screen bg-teal-500 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          About Us
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-12 shadow-lg mb-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Story</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded with a vision to transform the industry, we have grown from a small startup
              to a global leader in providing innovative solutions. Our journey has been marked by
              continuous growth, unwavering commitment to excellence, and a passion for exceeding
              customer expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we serve thousands of clients worldwide, delivering cutting-edge products and
              services that drive success. Our team of dedicated professionals works tirelessly to
              ensure that every interaction with our company is exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:scale-105 transition-transform">
                <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <p className="text-4xl font-bold text-teal-500 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
