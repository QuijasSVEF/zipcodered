import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

const stats = [
  { 
    id: 1,
   
    value: '$29,876',
    label: 'BASIC AID DISTRICTS',
    description: 'Average per-pupil funding in Palo Alto USD'
  },
  { 
    id: 2,
   
    value: '$16,504',
    label: 'NON-BASIC AID DISTRICTS',
    description: 'Average per-pupil funding in Milpitas USD'
  },
  {
    id: 3,
    
    value: '$13,372',
    label: 'FUNDING GAP',
    description: 'Per student difference between basic aid and non-basic aid districts'
  },
];

export function Stats() {
  return (
    <div className="bg-[#90C897]/60 py-24 sm:py-32 lg:py-40" id="stats">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-lato mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark text-stroke-1 text-stroke-black" itemProp="name">
              The Funding Gap in Numbers
            </h2>
            <div className="mt-4">
              <Button
                as="a"
                href="https://public.tableau.com/app/profile/colleen.thomas/viz/SCAEdEqualization/DistrictComparison"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 hover:text-primary-dark"
              >
                View Interactive Dashboard
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:gap-12 lg:gap-16 sm:mt-20 lg:mt-24 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center bg-white/95 backdrop-blur-sm p-8 sm:p-10 lg:p-12 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 border-[#90C897]/60">
                <dt className="text-sm font-bold mb-4 text-black font-montserrat">
                  {stat.title}
                </dt>
                <dd className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark mb-4 font-lato">
                  {stat.value}
                </dd>
                <dd className="text-lg font-bold text-gray-800 mb-6 font-montserrat">
                  {stat.label}
                </dd>
                <dd className="text-base text-gray-600 max-w-xs font-montserrat leading-relaxed">
                  {stat.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}