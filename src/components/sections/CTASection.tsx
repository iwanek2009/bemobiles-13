
import React from 'react';

const CTASection = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('[data-stickee-widget-id]');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Find Your Perfect Mobile Phone Deal in Southampton Today
      </h2>
      
      <p className="text-gray-600 text-xl mb-12 max-w-3xl mx-auto">
        Why wait? Compare the latest mobile phone deals from major UK networks and discover exclusive Southampton offers not available elsewhere. Use our comparison tool to find the perfect balance of upfront cost, monthly payments, and data allowance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <button 
          onClick={scrollToWidget}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full"
        >
          Compare Phone Deals
        </button>
        
        <button 
          onClick={scrollToWidget}
          className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors w-full"
        >
          View Latest Offers
        </button>
      </div>
    </section>
  );
};

export default CTASection;
