import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const NoUpfrontCTASection = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('[data-stickee-widget-id]');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Upgrade Today: Explore Unbeatable Smartphone Contracts, Offers & More – No Upfront Cost!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Choosing a smartphone has never been easier or more affordable—with deals that let you pay over time and no hefty upfront cost! From the sleek design of the latest iPhone to the innovative features of Google's Pixel and Samsung's Galaxy, there's something for everyone.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Ready to make your move? Explore the latest offers with no upfront cost, compare models, and discover the perfect contract plan for your lifestyle. Don't miss out on exclusive deals, bundle promotions, and upgrade programs that keep you connected without the financial strain!
          </p>
          
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-base"
            onClick={scrollToWidget}
          >
            Explore No Upfront Cost Deals
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};