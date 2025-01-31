import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Cpu, Camera, Smartphone } from "lucide-react";

export const FutureTrends = () => {
  return (
    <div className="mt-16">
      <PageText variant="h2" className="mb-8">
        Future Google Phone Trends
      </PageText>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Cpu className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Self-Designed Chips</h3>
          </div>
          <p className="text-gray-600">
            Expect Google to continue refining its Tensor processors, focusing on AI performance and battery efficiency.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Camera Evolution</h3>
          </div>
          <p className="text-gray-600">
            Enhanced zoom features, better low-light capture, and improved post-processing are likely to remain a priority.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Smartphone className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Foldables?</h3>
          </div>
          <p className="text-gray-600">
            Rumors suggest Google exploring foldable phone designs to compete with market alternatives. Keep an eye on upcoming announcements.
          </p>
        </div>
      </div>
    </div>
  );
};