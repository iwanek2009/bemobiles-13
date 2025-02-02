import { useEffect, useState } from 'react';

interface StickeeWidgetProps {
  filter?: { 
    families?: number[];
    brands?: number[];
  };
  basic?: boolean;
}

export const StickeeWidget = ({ filter, basic }: StickeeWidgetProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
        script.async = true;
        
        script.onerror = () => {
          console.error('Failed to load Stickee widget script');
          setHasError(true);
        };

        script.onload = () => {
          console.log('Stickee widget script loaded successfully');
        };
        
        document.head.appendChild(script);
        console.log('Stickee widget script added to head');

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

  if (basic) {
    return (
      <div className="w-full">
        <div data-stickee-widget-id="smartfony-90">
          Loading...
        </div>
      </div>
    );
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