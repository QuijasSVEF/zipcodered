import React from 'react';

const partners = [
  {
    name: 'Silicon Valley Education Foundation',
    role: 'Cosponsor',
    image: 'https://www.eastinitiative.org/resources/images/Publications/24.jpg',
    url: 'https://www.svefoundation.org/',
  },
  {
    name: 'Eastside Union High School District',
    role: 'Cosponsor',
    image: 'https://eastsidecareerpathways.org/wp-content/uploads/2016/04/logo-1.png',
    url: 'https://www.esuhsd.org/',
  },
  {
    name: 'Latino Education Advancement Foundation',
    role: 'Cosponsor',
    image: 'https://i.imgur.com/hFU4jNv.png',
    url: 'https://www.leafca.org/',
  },
  {
    name: 'DJM Capital',
    role: 'Cosponsor',
    image: 'https://images.squarespace-cdn.com/content/v1/5b32b34dcef3725618720d21/1533847043923-DDVPJFQFHEGYT0I5PEFJ/DJM_Logo.png',
    url: 'https://www.djmcapital.com/',
  },
  {
    name: 'Santa Clara County School Boards Association Legislative Action Committee',
    role: 'Cosponsor',
    image: 'https://images.squarespace-cdn.com/content/v1/6715e2976d09272c9c6d2799/675ce798-1351-4c3f-a980-faa72b5223c6/Favicon+%287%29.png',
    url: 'https://www.sccsba.org/',
  },
];

export function Coalition() {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-white py-20 sm:py-28 lg:py-32" id="coalition">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark to-accent-dark text-stroke-1 text-stroke-white">
            Our Coalition Partners
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
            Working together with leading organizations across California to create lasting change in educational funding.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-10 sm:mt-20 lg:mt-24 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:gap-x-12 sm:gap-y-16">
          {partners.map((partner) => (
            <li key={partner.name} className="group">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl transform group-hover:-translate-y-1 bg-white p-4 flex items-center justify-center ${
                  partner.name === 'Silicon Valley Education Foundation' ? 'h-48' :
                  partner.name === 'DJM Capital' ? 'h-24' : 'h-32'
                }`}
              >
                <img 
                  className={`max-w-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                    partner.name === 'Silicon Valley Education Foundation' ? 'max-h-40' :
                    partner.name === 'DJM Capital' ? 'max-h-16' : 'max-h-24'
                  }`}
                  src={partner.image} 
                  alt={partner.name} 
                />
              </a>
              <h3 className="mt-6 text-xl font-bold leading-8 text-gray-900">{partner.name}</h3>
              <p className="mt-2 text-lg leading-7 text-gray-600">{partner.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}