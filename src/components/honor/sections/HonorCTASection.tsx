import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageText } from "@/components/ui/page-text";

export const HonorCTASection = () => {
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
          <PageText variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Honor Phone?
          </PageText>
          
          <div className="space-y-6 mb-8">
            <PageText>
              When it comes to a smartphone, it is just a matter of power, price, and love. Honor's mobile contract deals make for an appealing proposition for anyone after a sexy, high-performance embargo in the price of some rivals.
            </PageText>

            <PageText>
              Thanks to flexible payment plans, generous trade-in offers and hot bundle deals, now is a great time to upgrade.
            </PageText>

            <PageText>
              All set for adventure the latest Honor telephone applications and swap an incredible agreement deal? See more details on current promotions, compare models, and find the one that's right for you.
              Regardless if you're switching from another brand or upgrading your existing device, we have deals that fit just about every lifestyle and budget.
            </PageText>
          </div>

          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-base"
            onClick={scrollToWidget}
          >
            Explore Honor Phone Deals
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};