import { Zap, Shield, Headphones, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Lightning-fast service delivery to meet your urgent needs and tight deadlines.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Top-notch security measures to protect your data and ensure peace of mind.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Cutting-edge solutions powered by the latest technology and best practices.',
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-purple-500 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
