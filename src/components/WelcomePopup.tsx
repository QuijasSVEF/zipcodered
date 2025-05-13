import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, X } from 'lucide-react';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = React.useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all border-2 border-accent/20">
        <div className="absolute right-4 top-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-3 text-center sm:mt-5">
          <h3 className="text-2xl sm:text-3xl font-bold leading-8 text-primary-dark mb-2">
            A child's ZIP code shouldn't decide their future
          </h3>
          <div className="mt-4">
            <p className="text-lg font-medium text-secondary-dark">
              Join our Movement to equalize funding in California now!
            </p>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Button
            variant="secondary"
            size="lg"
            className="bg-accent hover:bg-accent-dark text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8"
            onClick={() => {
              document.getElementById('take-action')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Take Action Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}