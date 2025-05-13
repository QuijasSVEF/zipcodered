import React from 'react';
import YouTube from 'react-youtube';

// Fallback video ID if the primary video fails to load
const FALLBACK_VIDEO_ID = '1iFHkESwLn0';

export function Documentary() {
  const [isVideoError, setIsVideoError] = React.useState(false);
  const [isVideoReady, setIsVideoReady] = React.useState(false);
  const videoContainerRef = React.useRef<HTMLDivElement>(null);
  const videoTitle = "ZIP Code: Code Red - California School Funding Documentary";
  const videoDescription = "Discover how zip codes create educational funding disparities in California schools, impacting student opportunities and access to resources.";

  const handleVideoError = () => {
    setIsVideoError(true);
  };

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40" id="documentary">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-stroke-1 text-stroke-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark">ZIP Code:</span>
            <span className="text-red-600"> Code Red</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 max-w-3xl mx-auto">
           Discover how a student’s zip code can create powerful challenges that impact opportunity and access.
          </p>
        </div>
        <div ref={videoContainerRef} className="mx-auto max-w-6xl">
          <div className="aspect-video w-full bg-primary-light rounded-xl overflow-hidden shadow-lg">
            {!isVideoError ? (
              <div className="relative h-full">
                {!isVideoReady && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="animate-pulse text-gray-400">Loading video...</div>
                  </div>
                )}
                <YouTube
                  videoId={FALLBACK_VIDEO_ID}
                  className="absolute inset-0 h-full w-full"
                  onError={handleVideoError}
                  onReady={handleVideoReady}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 0,
                      modestbranding: 1,
                     rel: 0,
                     title: videoTitle,
                     description: videoDescription
                    },
                  }}
                />
              </div>
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-100 p-8 text-center">
                <p className="text-gray-600">
                  Sorry, the video is currently unavailable. Please try again later.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}