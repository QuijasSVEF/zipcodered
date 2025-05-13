import React from 'react';
import YouTube from 'react-youtube';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

// Fallback video ID if the primary video fails to load
const FALLBACK_VIDEO_ID = '1iFHkESwLn0';

/**
 * Hero component that serves as the main landing section.
 * Features:
 * - Main headline and call-to-action
 * - Embedded YouTube video
 * - Responsive layout with mobile optimization
 * - Error handling for video loading
 */
export function Hero() {
  // Track video player state
  return (
    <div className="relative py-12 sm:py-16 lg:py-20" itemScope itemType="https://schema.org/HeroSection">
      {/* Split background images */}
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center space-y-16" role="banner">
          <div className="mx-auto max-w-6xl text-center relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 bg-clip-padding backdrop-filter transform transition-all duration-300 hover:scale-[1.02]">
            {/* Split background for text section */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 hover:scale-125 transition-transform duration-700"
                  style={{ 
                    backgroundImage: 'url("https://i.imgur.com/iHt9A2s.jpeg")',
                    filter: 'brightness(0.9)'
                  }}
                  role="img"
                  aria-label="Educational funding disparity illustration"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="w-1/2 relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 hover:scale-125 transition-transform duration-700"
                  style={{ 
                    backgroundImage: 'url("https://i.imgur.com/wWIWjYp.jpeg")',
                    filter: 'brightness(0.9)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl relative z-10 font-lato bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark drop-shadow-lg px-6 py-4 rounded-lg bg-black/10 backdrop-blur-[2px] inline-block text-stroke-1 text-stroke-white" itemProp="headline">
              Zip Code Red: California School Funding Crisis
            </h1>
            <p className="mt-8 text-lg leading-8 text-white sm:text-xl sm:leading-9 max-w-2xl mx-auto relative z-10 drop-shadow-lg font-montserrat bg-black/20 p-4 rounded-lg backdrop-blur-[3px]" role="contentinfo">
            SB743 aims to close the $13,372 per-student funding gap among California school districts by establishing an endowment for equal educational opportunities.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-x-6 relative z-10">
              <Button 
                variant="secondary"
                size="lg" 
                className="bg-accent hover:bg-accent-dark text-white border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm px-8 py-4 text-lg font-semibold"
                onClick={() => document.getElementById('take-action')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Take Action Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary-dark text-white border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm" onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}