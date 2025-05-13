import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

const resources = [
  {
    title: 'Frequently Asked Questions',
    description: 'Common questions and answers about SB743 and educational funding reform.',
    type: 'Document',
    icon: FileText,
    action: 'View FAQ',
    url: 'https://docs.google.com/document/d/14-Klo604BLt3E0F7a6ESIFoQosYagmjo/edit?usp=sharing&ouid=110474046563993791348&rtpof=true&sd=true',
  },
  {
    title: 'Fact Sheet',
    description: 'Legislative fact sheet outlining California State Senator Dave Cortese proposed Senate Bill 743.',
    type: 'Document',
    icon: FileText,
    action: 'Download',
    url: 'https://docs.google.com/document/d/1HHFC2e54Uo9nffdHYZLwmbmcjy76xJji81jPjAuh6Rk/edit?usp=sharing',
  },
  {
    title: 'Slide Deck',
    description: 'Comprehensive presentation detailing SB743, its impact, and implementation strategy.',
    type: 'Google Slide',
    icon: FileText,
    action: 'View Presentation',
    url: 'https://docs.google.com/presentation/d/1VgYODr7xo-l9hxK7RHnupQmoIv6WBhZgMQ-8L3j-rZo/edit?usp=sharing',
  },
];

export function Resources() {
  return (
    <div className="bg-[#90C897]/60 py-24 sm:py-32 lg:py-40" id="resources">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark text-stroke-1 text-stroke-white">
            Resources & Downloads
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9 max-w-3xl mx-auto">
            Access our collection of resources to learn more about educational funding in California and how you can help make a difference.
          </p>
        </div>
        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:mt-32 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.title} className="flex flex-col bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-[#90C897]/60">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <resource.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {resource.title}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{resource.description}</p>
                  <p className="mt-8">
                    <Button
                      as="a"
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      className="gap-x-2 w-full justify-center py-3 text-base font-semibold hover:bg-primary-dark hover:text-white transition-colors"
                    >
                      {resource.action === 'Download' ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                      {resource.action}
                    </Button>
                    {resource.title === 'Frequently Asked Questions' && (
                      <p className="mt-4 text-sm text-gray-500 italic">
                        Click to view our comprehensive FAQ document with detailed answers about the initiative
                      </p>
                    )}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}