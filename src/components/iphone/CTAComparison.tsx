
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTAComparison = () => {
  const scrollToWidget = () => {
    const widget = document.querySelector('[data-stickee-widget-id]');
    if (widget) {
      widget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Find Your Perfect iPhone 15 Pro Max Deal Today
        </h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Ready to experience Apple's most powerful iPhone? Compare deals from major UK networks starting from £45 per month, with options for no upfront cost. Get the best value on your iPhone 15 Pro Max contract with our comparison tool.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button 
            onClick={scrollToWidget}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Compare Pro Max Deals
            <ChevronRight size={20} />
          </button>
          <a 
            href="/iphone-mobile-phones" 
            className="flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors w-full sm:w-auto"
          >
            View All iPhone Deals
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTAComparison;
