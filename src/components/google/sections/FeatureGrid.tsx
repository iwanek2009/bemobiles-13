import React from 'react';
import { Smartphone, Camera, Brain, Cloud } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Stock Android Experience",
    description: "No heavy skins or bloatware. You get swift updates, timely security patches, and smooth performance."
  },
  {
    icon: Camera,
    title: "Exceptional Camera Systems",
    description: "From stunning low-light shots to unique portrait modes, Pixel phones consistently rank among the top for mobile photography."
  },
  {
    icon: Brain,
    title: "AI-Driven Features",
    description: "Real-time language translation, on-device call screening, and advanced voice commands harness Google's AI technology."
  },
  {
    icon: Cloud,
    title: "Seamless Ecosystem",
    description: "Syncing your emails, photos, and files across devices is effortless with built-in Google services."
  }
];

export const FeatureGrid = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <feature.icon className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};