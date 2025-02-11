
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Pixel8ProCTASection = () => {
  const navigate = useNavigate();

  const handlePixel9ProClick = () => {
    // Navigate to the Pixel 9 Pro page
    navigate('/mobile-phones/Google-Pixel-9-Pro-Deals');
    // Force a page refresh after navigation
    window.location.reload();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Find Your Perfect Google Pixel 8 Pro Deal Today
      </h2>

      <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
        Why wait? Compare the latest Google Pixel 8 Pro contract deals from major UK networks and discover exclusive offers not available elsewhere. Use our comparison tool to find the perfect balance of upfront cost, monthly payments, and data allowance.
      </p>

      <p className="text-gray-700 text-lg mb-8">
        With deals starting from £37.46 per month, you could be enjoying your new Pixel 8 Pro sooner than you think.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Compare Pixel 8 Pro Deals
        </button>
        <button 
          onClick={handlePixel9ProClick}
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
        >
          View Pixel 9 Pro Deals
        </button>
      </div>
    </section>
  );
};
