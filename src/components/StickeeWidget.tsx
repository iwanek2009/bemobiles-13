import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const StickeeWidget = () => {
  const location = useLocation();

  useEffect(() => {
    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      // Remove any existing Stickee elements from the DOM
      const existingElements = document.querySelectorAll('[data-stickee-widget-id]');
      existingElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, [location.key]); // Re-run effect when location changes

  return (
    <div className="w-full">
      <div data-stickee-widget-id="smartfony-90">Loading...</div>
    </div>
  );
};