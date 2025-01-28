import { useEffect, useState } from 'react';

interface StickeeWidgetProps {
  filter?: { families: number[] };
}

export const StickeeWidget = ({ filter }: StickeeWidgetProps) => {
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
          console.error('Failed to load Stickee widget script');
          setHasError(true);
        };

        // Add load handler to confirm script loaded
        script.onload = () => {
          console.log('Stickee widget script loaded successfully');
        };
        
        document.head.appendChild(script);
        console.log('Stickee widget script added to head');

        // Cleanup function
        return () => {
          document.head.removeChild(script);
        };
      } catch (error) {
        console.error('Error setting up Stickee widget:', error);
        setHasError(true);
      }
    };

    loadScript();
  }, []);

  if (hasError) {
    console.error('Widget in error state');
    return null;
  }

  return (
    <div className="w-full">
      <div 
        data-stickee-widget-id="smartfony-90"
        data-filters={filter ? JSON.stringify(filter) : undefined}
        data-sort="UPFRONT_PRICE"
      >
        Loading deals...
      </div>
    </div>
  );
};