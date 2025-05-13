import React from 'react';

function SurveyMonkeyEmbed() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const initSurveyMonkey = React.useCallback(() => {
    // Remove any existing survey monkey elements
    const existingScript = document.getElementById('smcx-sdk-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and append the new script
    const script = document.createElement('script');
    script.id = 'smcx-sdk-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd5h4ZQ_2FWmt6D_2FAhWYBptB5dJvtlSXGT7SS_2FjZv88IEGu.js';
    
    script.onload = () => {
      setIsLoading(false);
    };
    
    document.body.appendChild(script);
    
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  React.useEffect(() => {
    const cleanup = initSurveyMonkey();
    return cleanup;
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary-light border-t-primary-dark"></div>
            <p className="text-base font-medium text-gray-600">Loading form...</p>
          </div>
        </div>
      )}
      <div 
        ref={containerRef}
        id="smcx-sdk" 
        style={{ width: '100%', height: '600px', border: 'none', margin: '0px', padding: '0px' }}
      />
    </div>
  );
}

export function TFAForm() {
  return (
    <div className="bg-white py-12 sm:py-16" id="support">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-secondary-dark to-accent-dark text-stroke-1 text-stroke-white">
            Support Our Initiative
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
            Join us in advocating for equitable education funding in California
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-3xl">
            <SurveyMonkeyEmbed />
          </div>
        </div>
      </div>
    </div>
  );
}