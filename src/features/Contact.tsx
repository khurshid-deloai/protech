import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

interface ContactPerson {
  name: string;
  title: string;
  location: string;
  phone: string[];
  email: string[];
  address?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.purpose || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create mailto link with form data
    const subject = `Contact Form: ${formData.purpose}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Company: ${formData.company || 'N/A'}
Purpose: ${formData.purpose}

Message:
${formData.message}
    `.trim();
    
    const mailtoLink = `mailto:ian@protechinternational.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      purpose: '',
      message: ''
    });
  };

  const contactList: ContactPerson[] = [
    {
      name: 'Ian Struggles',
      title: 'CO OWNER',
      location: 'Colorado, USA',
      phone: ['+1 970 231 4402'],
      email: ['ian@protechinternational.net']
    },
    {
      name: 'Antonio Blanco Romanini',
      title: 'General Business Manager',
      location: 'San Jose, Costa Rica',
      phone: ['+506 2253 7523', '+506 8811 0958'],
      email: ['antonio@protechinternational.net']
    },
    {
      name: 'Carlos Bernhardt',
      title: 'CO OWNER',
      location: 'Florida, USA',
      phone: ['+1 561 723 5641'],
      email: ['cbprotech@gmail.com', 'carlos@protechinternational.net']
    },
    {
      name: 'Yunier Diaz',
      title: 'Technical Sales Manager',
      location: 'Louisiana, Florida',
      phone: ['+1 786 424 3015'],
      email: ['yunierd@protechinternational.net']
    },
    {
      name: 'Nick Spallone',
      title: 'Financial Controller',
      location: 'Colorado, USA',
      phone: ['+1 970 275 5362'],
      email: ['nick@protechinternational.net']
    },
    {
      name: 'Kristi Blount',
      title: 'Operations Manager',
      location: 'Mississippi, USA',
      phone: ['+1 662 404 7010', '+1 901 871 1142'],
      email: ['kristi@protechinternational.net']
    },
    {
      name: 'Alicia Billiot',
      title: 'Accounting Dept',
      location: 'Louisiana, USA',
      phone: ['+1 985 448 2555', '+1 985 413 4752'],
      email: ['alicia@protechinternational.net'],
      address: 'PO Box 1255, Thibodaux, LA 70302'
    },
    {
      name: 'Molly Dibiasi',
      title: 'Logistics Coordinator',
      location: 'Mississippi, USA',
      phone: ['+1 901 326 6566'],
      email: ['molly@protechinternational.net']
    },
    {
      name: 'Stephen Roten',
      title: 'Warehouse Coordinator',
      location: 'Thibodaux, Louisiana',
      phone: ['+1 985 438 1712'],
      email: ['stephen@protechinternational.net']
    },
    {
      name: 'Jose Manuel Mena',
      title: 'Sales Manager, Costa Rica',
      location: 'San Jose, Costa Rica',
      phone: ['+506 2253 7523', '+506 8365 9500'],
      email: ['manuel@protechinternational.net']
    },
    {
      name: 'Luis Vides',
      title: 'Sales Manager',
      location: 'Guatemala',
      phone: ['+502 2366 6187', '+502 5704 2208'],
      email: ['luis@protechinternational.net', 'protechchemicals@gmail.com']
    },
    {
      name: 'Daniel Ortiz',
      title: 'Administrative Manager',
      location: 'El Salvador',
      phone: ['+503 6161 1445'],
      email: ['daniel@protechinternational.net', 'protech.elsalvador@gmail.com']
    },
    {
      name: 'Ana Maria Jimenez',
      title: 'Sales Manager',
      location: 'Columbia, Ecuador, Peru',
      phone: ['+57 314 7777279'],
      email: ['ana.maria@protechinternational.net']
    },
    {
      name: 'Luis Adolfo Serrano',
      title: 'Sales Manager',
      location: 'Mexico',
      phone: ['+52 81 1053 8669'],
      email: ['Luis.serrano@protechinternational.net']
    },
    {
      name: 'Uyen Le',
      title: 'Regional Sales Manager',
      location: 'Asia',
      phone: ['+84 9 0334 6223'],
      email: ['uyen@protechinternational.net']
    },
    {
      name: 'Uyen Le',
      title: 'Sales Manager',
      location: 'Australia',
      phone: ['+84 9 0334 6223'],
      email: ['sales@protechaustralia.com']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch with our global team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Purpose *</label>
                <select
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                >
                  <option value="">Select a purpose</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="engineering-services">Engineering Services</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-emerald-500 text-white py-4 rounded-lg font-semibold hover:bg-emerald-600 transition"
              >
                Send Message
              </button>

              <p className="mt-4 text-sm text-gray-600 text-center">
                This will open your email client to send the message
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Team</h3>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4">
              {contactList.map((contact, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <h4 className="font-bold text-lg text-gray-900">{contact.name}</h4>
                  <p className="text-emerald-500 font-semibold mb-2">{contact.title}</p>

                  <div className="space-y-2">
                    <div className="flex items-start text-gray-600">
                      <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                      <span>{contact.location}</span>
                    </div>

                    {contact.address && (
                      <div className="flex items-start text-gray-600">
                        <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                        <span>{contact.address}</span>
                      </div>
                    )}

                    <div className="flex items-start text-gray-600">
                      <Phone size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        {contact.phone.map((phone, pidx) => (
                          <div key={pidx}>{phone}</div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start text-gray-600">
                      <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        {contact.email.map((email, eidx) => (
                          <a
                            key={eidx}
                            href={`mailto:${email}`}
                            className="block text-emerald-500 hover:underline"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;