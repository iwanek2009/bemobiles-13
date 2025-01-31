import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const GoogleCTASection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Score the Best Google Phone Deal?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            At bemobiles.com, we specialize in matching you with the best Pixel contracts based on your budget and usage habits. Whether you're into the standard Pixel or eyeing the latest Pixel Pro, our friendly experts can guide you to carrier promotions, bundle discounts, and flexible payment plans.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Wait?
            </h3>
            <ul className="text-left text-gray-600 space-y-3 mb-6 max-w-md mx-auto">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-blue-500" />
                Explore current Google phone offers
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-blue-500" />
                Compare Pro plans and standard Pixel deals
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-blue-500" />
                Save with trade-in and family plan options
              </li>
            </ul>
            <p className="text-gray-600 mb-8">
              Dive into the Google ecosystem and enjoy the benefits of seamless Android integration—let bemobiles.com help you secure the right plan today
            </p>
            
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-base"
              onClick={() => window.location.href = '#phones-section'}
            >
              Find Your Perfect Google Phone Deal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};