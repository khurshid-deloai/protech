import { MapPin, Globe2, Award } from 'lucide-react';

const Network = () => {
  return (
    <section id="network" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">PRO TECH Worldwide Network</h2>
          <p className="text-gray-600 text-lg">
            A simple view of our global presence and commitment to serving the sugar industry worldwide.
          </p>
        </div>

        {/* Simple Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <MapPin size={32} className="text-emerald-600" />,
            title: 'Global Offices',
            text: 'Costa Rica, Guatemala, El Salvador, USA, Australia, UK'
          }, {
            icon: <Globe2 size={32} className="text-emerald-600" />,
            title: 'Worldwide Reach',
            text: 'Support across Asia and Africa'
          }, {
            icon: <Award size={32} className="text-emerald-600" />,
            title: 'Local Support',
            text: 'Reliable service wherever you operate'
          }].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-center space-y-3">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 text-center space-y-3">
          <h3 className="text-2xl font-bold">Experience That Matters</h3>
          <p className="text-base max-w-2xl mx-auto">
            Over 150 years of combined experience in chemical and engineering fields.
          </p>
        </div>

        {/* Regions */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Regional Presence</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[{
              region: 'North America',
              locations: 'USA'
            }, {
              region: 'Central America',
              locations: 'Costa Rica, Guatemala, El Salvador'
            }, {
              region: 'Europe',
              locations: 'United Kingdom'
            }, {
              region: 'Asia Pacific',
              locations: 'Australia, Asia'
            }].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-emerald-500">
                <h4 className="font-semibold text-gray-900">{item.region}</h4>
                <p className="text-gray-600 text-sm">{item.locations}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Network;
