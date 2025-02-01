import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MobileCTASection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to explore the best phone deals?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Navigating the smartphone market and mobile contract deals in the UK doesn't have to be overwhelming. With insights into model variations, latest releases, and contract options, you're now better equipped to make an informed decision. Whether it's an iPhone, Google Pixel, Samsung Galaxy, or Sony Xperia, there's a contract deal that perfectly matches your lifestyle and budget.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Check out the latest mobile contract deals and exclusive offers. Dive into our comprehensive comparisons, discover trade-in opportunities, and find the perfect plan that gets you the most out of your new smartphone. Happy shopping!
          </p>
          
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-base"
            onClick={() => window.location.href = '#phones-section'}
          >
            Explore Mobile Phone Deals
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};