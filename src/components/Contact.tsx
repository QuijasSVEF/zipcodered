import React from 'react';
import { Phone, Mail, Building2 } from 'lucide-react';

const contacts = [
  {
    name: 'Ashonte Smith',
    organization: 'Office of Senator Dave Cortese',
    phone: '(916) 651-4015',
    email: 'Ashonte.Smith@Sen.ca.gov',
  },
  {
    name: 'Dr. Lisa Andrew',
    organization: 'Silicon Valley Education Foundation',
    phone: '(408) 398-2747',
    email: 'lisa@svefoundation.org',
  },
  {
    name: 'Chris Norwood',
    organization: 'Chair, Santa Clara County School Boards Association Legislative Action Committee',
    phone: '(408) 210-5537',
    email: 'lac@sccsba.org',
  },
];
export function Contact() {
  return (
    <div className="bg-gradient-to-b from-white to-primary/10 py-24 sm:py-32 lg:py-40" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark text-stroke-1 text-stroke-white">Contact Us</h2>
          <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9 max-w-3xl mx-auto">
            Get in touch with our team to learn more about the initiative.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl grid gap-8 sm:gap-10 lg:gap-12 sm:mt-20 lg:mt-24 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div key={contact.email} className="group bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 transform hover:-translate-y-2">
              <h3 className="font-bold text-xl text-primary-dark">{contact.name}</h3>
              <div className="mt-2 flex items-start gap-x-2 text-sm text-gray-600">
                <Building2 className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span>{contact.organization}</span>
              </div>
              <div className="mt-4 space-y-2">
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-x-2 text-base text-gray-600 hover:text-primary-dark transition-colors duration-200"
                >
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-x-2 text-base text-gray-600 hover:text-primary-dark transition-colors duration-200"
                >
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}