import { Settings, BarChart3, Lightbulb, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const engineeringServices = [
    'Complete design and product management for full or partial refinery build',
    'Complete design and product management for full or partial raw factory build'
  ];

  const specificServices = [
    'Sugar Manufacturing',
    'Consultancy & Feasibility studies',
    'Sugar process design for new and existing factories and refineries',
    'Energy and Mass Balances',
    'Multi-disciplinary engineering (process, mechanical, electrical, instrumentation, civil/structural)',
    'High-efficiency, low-cost factory & refinery process design',
    'Capacity upgrades & performance improvements',
    'Sugar handling, conditioning, storage, packaging, warehousing',
    'Project management',
    'Process commissioning & training',
    'Process optimisation',
    'After-sales technical support'
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Engineering, Design & Consulting</h2>
          <p className="text-lg text-gray-600">
            World-class engineering and process expertise tailored for the global sugar and bioethanol industries.
          </p>
        </div>

        {/* Intro Box with Image */}
        <div className="bg-white rounded-2xl shadow p-10 text-gray-700 leading-relaxed grid md:grid-cols-2 gap-10 items-center">
          <div className='flex flex-col gap-2 text-justify'>
            <p>With decades of combined industry experience, PRO TECH provides comprehensive engineering, design, and consulting services to sugar mills and refineries around the world. Our multidisciplinary team brings together specialists in process engineering, mechanical design, operations, and project management to deliver end-to-end solutions tailored to each client’s unique requirements. From concept development and feasibility studies to performance optimisation and high-efficiency process design, we support every stage of the project lifecycle.</p>
            <p>Backed by a strong global presence across North America, South America, Europe, and the Asia-Pacific region, we are able to respond quickly to client needs and apply international best practices to every engagement. Our commitment to innovation, reliability, and operational excellence ensures that PRO TECH consistently delivers results that enhance productivity, reduce costs, and maximise long-term plant performance.</p>
          </div>

          <img
            src="https://images.pexels.com/photos/2391/dirty-industry-stack-factory.jpg"
            alt="Engineering Team"
            className="rounded-xl shadow-md object-cover w-full h-128"
          />
        </div>

        {/* Icons Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[{
            icon: <Settings size={40} className="text-emerald-600" />, title: 'Engineering Excellence', text: 'Complete engineering and design solutions'
          }, {
            icon: <BarChart3 size={40} className="text-emerald-600" />, title: 'Process Optimization', text: 'Driving efficiency & plant performance'
          }, {
            icon: <Lightbulb size={40} className="text-emerald-600" />, title: 'Innovation', text: 'Advanced, cost-effective process innovations'
          }].map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition space-y-4">
              <div className="bg-emerald-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Engineering Services */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Engineering & Design Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {engineeringServices.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-xl flex gap-4 shadow-md">
                <CheckCircle2 size={26} />
                <p className="text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Services */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">Specific Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specificServices.map((service, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 flex gap-3 items-start hover:shadow-sm transition">
                <CheckCircle2 className="text-emerald-600 mt-0.5" size={20} />
                <p className="text-gray-700 text-sm">{service}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
