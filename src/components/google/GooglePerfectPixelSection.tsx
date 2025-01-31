import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { FeatureGrid } from './sections/FeatureGrid';
import { PixelLineup } from './sections/PixelLineup';
import { LatestFeatures } from './sections/LatestFeatures';
import { GoogleEcosystem } from './sections/GoogleEcosystem';
import { ChoosingTips } from './sections/ChoosingTips';
import { ContractTips } from './sections/ContractTips';
import { FutureTrends } from './sections/FutureTrends';

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

          <FeatureGrid />
          <PixelLineup />
          <LatestFeatures />
          <GoogleEcosystem />
          <ChoosingTips />
          <ContractTips />
          <FutureTrends />
        </div>
      </div>
    </section>
  );
};