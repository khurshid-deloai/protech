import { Building2, TrendingUp, Award, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-emerald-600 font-semibold">ABOUT PRO TECH</p>
          <h2 className="text-4xl font-bold text-gray-900">Industry Leadership Since 2001</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Delivering innovation and engineering excellence to the global sugar and bioethanol industries.
          </p>
        </div>

        {/* Three Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <Building2 className="text-emerald-500" size={30} />, title: "Our Foundation",
            text: "Over 20 years improving sugar and bioethanol production.",
          }, {
            icon: <Globe className="text-emerald-500" size={30} />, title: "Global Reach",
            text: "Serving clients across the Americas, Europe, Asia, and Africa.",
          }, {
            icon: <Award className="text-emerald-500" size={30} />, title: "Proven Results",
            text: "Trusted for delivering practical, high-performance solutions.",
          }].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow text-center space-y-3">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[{n: "150+", t: "Years Combined Experience"}, {n: "20+", t: "Years in Business"}, {n: "6+", t: "Global Regions"}].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-emerald-600">{item.n}</div>
              <p className="text-gray-600 text-sm">{item.t}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-emerald-600 text-white rounded-2xl p-10 text-center space-y-4">
          <h3 className="text-2xl font-bold">Ready to Work With Us?</h3>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
          >
            Get in Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;