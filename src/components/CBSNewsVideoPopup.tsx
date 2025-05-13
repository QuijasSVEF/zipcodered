import React from 'react';
import YouTube from 'react-youtube';
import { X } from 'lucide-react';

interface CBSNewsVideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CBSNewsVideoPopup({ isOpen, onClose }: CBSNewsVideoPopupProps) {
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
        <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl">
          <YouTube
            videoId="SI8mfhidzR0"
            className="w-full h-full"
            opts={{
              height: '100%',
              width: '100%',
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                rel: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}