import { Users, Award, CheckCircle } from 'lucide-react';

export default function ServiceSpecialist() {
  const specialists = [
    {
      name: 'John Doe',
      role: 'Senior Specialist',
      expertise: 'Technical Solutions',
      experience: '10+ years',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Consultant',
      expertise: 'Business Strategy',
      experience: '8+ years',
    },
    {
      name: 'Mike Johnson',
      role: 'Expert Advisor',
      expertise: 'Customer Success',
      experience: '12+ years',
    },
  ];

  return (
    <section id="service-specialist" className="min-h-screen bg-red-500 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Service Specialists
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg p-8 mb-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-500 p-4 rounded-full">
                <Users className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Expert Team</h3>
                <p className="text-gray-600">Dedicated professionals committed to your success</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Certified Experts</h4>
                  <p className="text-gray-600">All specialists hold industry-recognized certifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold mb-1">Proven Track Record</h4>
                  <p className="text-gray-600">Years of successful client partnerships</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="bg-red-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="text-red-500" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-2">{specialist.name}</h3>
                <p className="text-red-500 font-semibold mb-2">{specialist.role}</p>
                <p className="text-gray-600 mb-1">{specialist.expertise}</p>
                <p className="text-gray-500 text-sm">{specialist.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
