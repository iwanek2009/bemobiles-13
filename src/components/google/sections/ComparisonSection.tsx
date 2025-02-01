import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const ComparisonSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="mb-6">
            Comparisons & Competitors
          </PageText>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-8">
            <p>
              While Pixel phones are celebrated for their innovation, it's always smart to see how they stack up against the competition:
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PageText variant="h3" className="mb-4">
                Against iPhone
              </PageText>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">Advantage:</span>
                  <span>Pixel's AI features and clean Android experience make for a more personalized user experience.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">Consideration:</span>
                  <span><Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhones offer</Link> a tightly integrated ecosystem with iOS, but Pixel stands out with faster, more frequent updates and advanced AI capabilities.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PageText variant="h3" className="mb-4">
                Against Samsung Galaxy
              </PageText>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">Advantage:</span>
                  <span>Google's Pixel models are known for their software simplicity and cutting-edge camera AI, providing a more intuitive photography experience.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">Consideration:</span>
                  <span>Samsung offers more hardware options (like foldable screens) and extensive customization, yet Pixel's seamless Google integration offers a different kind of smart functionality.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PageText variant="h3" className="mb-4">
                For Budget-Conscious Users
              </PageText>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-semibold text-primary">Advantage:</span>
                  <span>Older Pixel models deliver great performance at a lower price point without sacrificing the core benefits of Google's software and services.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-gray-600">
            <p>
              These comparisons help you weigh what matters most: whether it's cutting-edge AI, photography prowess, or overall ecosystem synergy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};