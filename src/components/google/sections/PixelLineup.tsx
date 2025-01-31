import React from 'react';
import { PageText } from "@/components/ui/page-text";

export const PixelLineup = () => {
  return (
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
  );
};