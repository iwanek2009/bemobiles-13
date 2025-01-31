import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Smartphone, Camera, Brain, Cloud } from "lucide-react";

export const GooglePerfectPixelSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="text-center mb-12">
            Find the Perfect Pixel
          </PageText>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              Google's Pixel smartphones have made quite a name for themselves with pure Android experiences, 
              top-tier camera performance, and seamless integration with Google services. Whether you're new 
              to Pixel or upgrading from a previous model, finding the right contract deal can be just as 
              important as choosing the device itself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Stock Android Experience</h3>
              </div>
              <p className="text-gray-600">
                No heavy skins or bloatware. You get swift updates, timely security patches, and smooth performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Camera className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Exceptional Camera Systems</h3>
              </div>
              <p className="text-gray-600">
                From stunning low-light shots to unique portrait modes, Pixel phones consistently rank among the top for mobile photography.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">AI-Driven Features</h3>
              </div>
              <p className="text-gray-600">
                Real-time language translation, on-device call screening, and advanced voice commands harness Google's AI technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Cloud className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Seamless Ecosystem</h3>
              </div>
              <p className="text-gray-600">
                Syncing your emails, photos, and files across devices is effortless with built-in Google services.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <PageText variant="h3" className="mb-6">Exploring the Pixel Lineup</PageText>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4">Standard Pixel</h4>
                  <p className="text-gray-600 mb-4">Perfect for users who want a streamlined phone that delivers great performance without the higher price tag of Pro models.</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Clean Android Interface with day-one OS updates</li>
                    <li>High-Quality Camera that often beats premium competitors</li>
                    <li>Long Battery Life to last through a typical day of moderate use</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4">Pixel Pro</h4>
                  <p className="text-gray-600 mb-4">Designed for power users craving top-of-the-line specs, a bigger screen, and premium camera innovations.</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Pro-Level Camera Setup with telephoto lenses for crisp zoom shots</li>
                    <li>Higher Refresh-Rate Display for fluid scrolling (e.g., 90Hz or 120Hz)</li>
                    <li>More Robust Battery for those who need extended screen-on time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <PageText variant="h3" className="mb-6">Latest Features</PageText>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="list-disc pl-6 space-y-4 text-gray-600">
                  <li>
                    <span className="font-semibold">Upgraded Tensor Chip:</span> Google's in-house processor focuses on AI tasks, enhancing voice recognition, photography, and overall performance.
                  </li>
                  <li>
                    <span className="font-semibold">Enhanced Camera Features:</span> Improved Night Sight for low-light photography, Magic Eraser for editing out distractions, and advanced portrait modes.
                  </li>
                  <li>
                    <span className="font-semibold">Adaptive Battery & Charging:</span> Smarter battery allocation to apps you use most, along with faster charging speeds.
                  </li>
                  <li>
                    <span className="font-semibold">Software Exclusives:</span> Features like Live Translate and advanced spam call screening.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
