import { useEffect } from 'react';

export const StickeeWidget = () => {
  useEffect(() => {
    // Create and load the script
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div data-stickee-widget-id="smartfony-90">Loading...</div>
    </div>
  );
};