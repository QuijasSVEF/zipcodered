import React from 'react';
import { Button } from './ui/Button';
import { FileText, ExternalLink } from 'lucide-react';

export function LetterUpload() {
  return (
    <div className="bg-white py-20 sm:py-28" id="take-action">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark">
            Submit Your Support Letter
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
            Join thousands of Californians in supporting educational funding reform. Download our example letter and submit it directly to the legislature.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              as="a"
              href="https://docs.google.com/document/d/1ryPLmsqLjha4DsH2dIwCR8UMJb1EF45O/edit"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Example Letter
            </Button>
            <Button
              as="a"
              href="https://calegislation.lc.ca.gov/Advocates/"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Submit to Legislature
            </Button>
          </div>
          <div className="mt-12 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Why Your Support Matters
            </h3>
            <p className="text-blue-700">
              Your letter of support helps demonstrate public backing for the SCA Education Equalization Endowment Act, 
              bringing us one step closer to achieving equitable funding for all California students.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-blue-600">
              <FileText className="h-4 w-4" />
              <span>Letters are reviewed by legislative staff and committee members</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            <p>
              Need help or have questions?{' '}
              <a
                href="#contact"
                className="text-blue-600 hover:text-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact our team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}