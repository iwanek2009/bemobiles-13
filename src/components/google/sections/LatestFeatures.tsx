import React from 'react';
import { PageText } from "@/components/ui/page-text";

export const LatestFeatures = () => {
  return (
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
  );
};