import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

interface SenateHearingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SenateHearingPopup({ isOpen, onClose }: SenateHearingPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="w-full bg-white rounded-xl p-8 text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Senate Education Committee Hearing</h3>
          <p className="text-gray-600 mb-6">
            Due to security restrictions, the hearing must be viewed directly on the Senate website.
          </p>
          <Button
            as="a"
            href="https://www.senate.ca.gov/media/senate-education-committee-20250409"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="bg-accent hover:bg-accent-dark text-white inline-flex items-center gap-2"
          >
            Open Senate Hearing
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}