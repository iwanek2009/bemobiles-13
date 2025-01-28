import { useEffect, useState } from 'react';

export const StickeeWidget = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      try {
        // Create and load the script
        const script = document.createElement('script');
        script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
        script.async = true;
        
        // Add error handling
        script.onerror = () => {
          console.warn('Failed to load Stickee widget script');
          setHasError(true);
        };
        
        document.head.appendChild(script);

        // Cleanup function
        return () => {
          document.head.removeChild(script);
        };
      } catch (error) {
        console.warn('Error setting up Stickee widget:', error);
        setHasError(true);
      }
    };

    loadScript();
  }, []);

  if (hasError) {
    return null; // Return nothing if there's an error loading the widget
  }

  return (
    <div className="w-full">
      <div 
        data-stickee-widget-id="smartfony-90" 
        data-filters='{"families":[1968]}'
      >
        Loading deals...
      </div>
    </div>
  );
};