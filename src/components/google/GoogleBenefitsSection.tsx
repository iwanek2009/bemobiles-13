import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Wifi, Signal, Zap } from "lucide-react";

export const GoogleBenefitsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h1" className="text-4xl font-bold text-gray-900 mb-6">
            Google Mobile Phone Contract Deals – UK's Best Google Phones Offers
          </PageText>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              If you're exploring the latest smartphone contracts in the UK, it's time to consider what Google has in store. Known for its AI-driven features and clean, intuitive design, Google's Pixel phones offer a fresh alternative to other big names like Apple and Samsung. Whether you're a photography enthusiast, a productivity pro, or simply after a user-friendly experience, Google's mobile phone contracts deliver flexibility, value, and innovation. Let's dive into the world of Google mobile phone deals and see how these offers can help you upgrade your tech life.
            </p>
          </div>

          <PageText variant="h3" className="text-center mb-8">
            Three Key Benefits at a Glance
          </PageText>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold text-xl mb-3">Lightning-Fast Downloads</h4>
              <p className="text-gray-600">
                Enjoy top speeds on your Google phone—especially if you compare broadband offers to find the best internet in your area for swift updates and streaming.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <Signal className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold text-xl mb-3">Reliable Connection</h4>
              <p className="text-gray-600">
                Stay online with fewer dropped calls or buffering. Pair a robust data plan and solid broadband provider to ensure a seamless experience—ideal for work and play.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <Wifi className="w-12 h-12 text-primary mb-4" />
              <h4 className="font-semibold text-xl mb-3">Low Latency</h4>
              <p className="text-gray-600">
                Experience smoother video calls and online gaming. With the right connection speed, you'll breeze through multitasking and never miss a beat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};