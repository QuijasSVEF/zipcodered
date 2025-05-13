import React, { lazy, Suspense } from 'react';

export function TableauDashboard() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    let viz: any = null;

    const initViz = () => {
      if (!containerRef.current || !window.tableau) return;

      if (!isInView) return;

      const loadViz = async () => {
        try {
          viz = new window.tableau.Viz(containerRef.current, 'https://public.tableau.com/views/SCAEdEqualization_HeatMap_/FundingGapMap', {
            hideTabs: true,
            hideToolbar: true,
            width: '100%',
            height: '800px',
            onFirstInteractive: () => {
              setIsLoading(false);
            }
          });
        } catch (err) {
          setError('Error loading visualization');
          setIsLoading(false);
        }
      };

      loadViz();
    };

    // Check if Tableau API is loaded
    if (window.tableau) {
      initViz();
    } else {
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/tableau-2.min.js';
      script.onload = initViz;
      document.head.appendChild(script);
    }
    // Cleanup
    return () => {
      if (viz) {
        viz.dispose();
      }
    };
  }, [isInView]);

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    window.location.reload();
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20" id="heatmap">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-accent-dark text-stroke-1 text-stroke-white">
            Funding Gap Heat Map
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
           Hover over the county to see the average total income per Pupil for Basic Aid and Non Basic Aid funded school districts. 
          </p>
        </div>
        <div className="mt-8 relative rounded-2xl overflow-hidden shadow-xl bg-white mx-auto max-w-[1200px] min-h-[800px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary-light border-t-primary-dark"></div>
                <p className="text-lg font-medium text-gray-900">Loading visualization...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <p className="text-red-600 mb-4">{error}</p>
                <button
                  onClick={handleRetry}
                  className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary transition-colors"
                >
                  Retry Loading
                </button>
              </div>
            </div>
          )}
          <div ref={containerRef} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}