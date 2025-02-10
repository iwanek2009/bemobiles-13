
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const MobileCTASection = () => {
  const scrollToWidget = () => {
    const widget = document.querySelector('[data-stickee-widget-id]');
    if (widget) {
      widget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 my-8">
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Find Your Perfect iPhone 15 Pro Deal Today
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Why wait? Compare the latest iPhone 15 Pro contract deals from major UK networks and discover exclusive offers not available elsewhere. Use our comparison tool to find the perfect balance of upfront cost, monthly payments, and data allowance.
        </p>
        <p className="text-gray-600">
          With deals starting from £35 per month, you could be enjoying your new iPhone 15 Pro sooner than you think.
        </p>
        <div className="space-x-4 pt-4">
          <Button 
            onClick={scrollToWidget}
            className="bg-primary text-white px-6 py-3 h-auto font-medium hover:bg-primary/90"
          >
            Compare iPhone 15 Pro Deals
          </Button>
          <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals">
            <Button 
              variant="outline"
              className="bg-white text-primary px-6 py-3 h-auto font-medium border-primary hover:bg-primary/10"
            >
              View iPhone 15 Pro Max Deals
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
