import { Mail, Phone, MapPin } from "lucide-react";

interface ContactPerson {
  name: string;
  title: string;
  location: string;
  phone: string[];
  email: string[];
  address?: string;
}

const Contact = () => {
  const contactList: ContactPerson[] = [
    {
      name: "Ian Struggles",
      title: "CO OWNER",
      location: "Colorado, USA",
      phone: ["+1 970 231 4402"],
      email: ["ian@protechinternational.net"],
    },
    {
      name: "Antonio Blanco Romanini",
      title: "General Business Manager",
      location: "San Jose, Costa Rica",
      phone: ["+506 2253 7523", "+506 8811 0958"],
      email: ["antonio@protechinternational.net"],
    },
    {
      name: "Carlos Bernhardt",
      title: "CO OWNER",
      location: "Florida, USA",
      phone: ["+1 561 723 5641"],
      email: ["cbprotech@gmail.com", "carlos@protechinternational.net"],
    },
    {
      name: "Yunier Diaz",
      title: "Technical Sales Manager",
      location: "Louisiana, Florida",
      phone: ["+1 786 424 3015"],
      email: ["yunierd@protechinternational.net"],
    },
    {
      name: "Nick Spallone",
      title: "Financial Controller",
      location: "Colorado, USA",
      phone: ["+1 970 275 5362"],
      email: ["nick@protechinternational.net"],
    },
    {
      name: "Kristi Blount",
      title: "Operations Manager",
      location: "Mississippi, USA",
      phone: ["+1 662 404 7010", "+1 901 871 1142"],
      email: ["kristi@protechinternational.net"],
    },
    {
      name: "Alicia Billiot",
      title: "Accounting Dept",
      location: "Louisiana, USA",
      phone: ["+1 985 448 2555", "+1 985 413 4752"],
      email: ["alicia@protechinternational.net"],
      address: "PO Box 1255, Thibodaux, LA 70302",
    },
    {
      name: "Molly Dibiasi",
      title: "Logistics Coordinator",
      location: "Mississippi, USA",
      phone: ["+1 901 326 6566"],
      email: ["molly@protechinternational.net"],
    },
    {
      name: "Stephen Roten",
      title: "Warehouse Coordinator",
      location: "Thibodaux, Louisiana",
      phone: ["+1 985 438 1712"],
      email: ["stephen@protechinternational.net"],
    },
    {
      name: "Jose Manuel Mena",
      title: "Sales Manager, Costa Rica",
      location: "San Jose, Costa Rica",
      phone: ["+506 2253 7523", "+506 8365 9500"],
      email: ["manuel@protechinternational.net"],
    },
    {
      name: "Luis Vides",
      title: "Sales Manager",
      location: "Guatemala",
      phone: ["+502 2366 6187", "+502 5704 2208"],
      email: ["luis@protechinternational.net", "protechchemicals@gmail.com"],
    },
    {
      name: "Daniel Ortiz",
      title: "Administrative Manager",
      location: "El Salvador",
      phone: ["+503 6161 1445"],
      email: ["daniel@protechinternational.net", "protech.elsalvador@gmail.com"],
    },
    {
      name: "Ana Maria Jimenez",
      title: "Sales Manager",
      location: "Columbia, Ecuador, Peru",
      phone: ["+57 314 7777279"],
      email: ["ana.maria@protechinternational.net"],
    },
    {
      name: "Luis Adolfo Serrano",
      title: "Sales Manager",
      location: "Mexico",
      phone: ["+52 81 1053 8669"],
      email: ["Luis.serrano@protechinternational.net"],
    },
    {
      name: "Uyen Le",
      title: "Regional Sales Manager",
      location: "Asia",
      phone: ["+84 9 0334 6223"],
      email: ["uyen@protechinternational.net"],
    },
    {
      name: "Uyen Le",
      title: "Sales Manager",
      location: "Australia",
      phone: ["+84 9 0334 6223"],
      email: ["sales@protechaustralia.com"],
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get in touch with our global team
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {contactList.map((contact, idx) => (
            <div
              key={idx}
              className="
                bg-white dark:bg-gray-800 
                rounded-2xl shadow-lg 
                p-12 
                w-full 
                min-w-[320px] max-w-[420px] mx-auto
                min-h-[380px]
                border border-gray-300 dark:border-gray-700
                hover:shadow-2xl transition
              "
            >
              <h4 className="font-bold text-2xl text-gray-900 dark:text-white mb-2">
                {contact.name}
              </h4>

              <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-4">
                {contact.title}
              </p>

              {/* Location */}
              <div className="flex items-start text-gray-600 dark:text-gray-300 mb-4">
                <MapPin size={22} className="mr-3 mt-1" />
                <span className="text-base">{contact.location}</span>
              </div>

              {/* Address */}
              {contact.address && (
                <div className="flex items-start text-gray-600 dark:text-gray-300 mb-4">
                  <MapPin size={22} className="mr-3 mt-1" />
                  <span className="text-base">{contact.address}</span>
                </div>
              )}

              {/* Phone */}
              <div className="flex items-start text-gray-600 dark:text-gray-300 mb-4">
                <Phone size={22} className="mr-3 mt-1" />
                <div className="text-base">
                  {contact.phone.map((p, i) => (
                    <div key={i}>{p}</div>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <Mail size={22} className="mr-3 mt-1" />
                <div className="text-base">
                  {contact.email.map((email, i) => (
                    <a
                      key={i}
                      href={`mailto:${email}`}
                      className="block text-emerald-600 dark:text-emerald-400 hover:underline break-words"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
