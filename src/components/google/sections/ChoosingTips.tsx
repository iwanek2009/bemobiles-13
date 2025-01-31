import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { DollarSign, Calendar, Signal, Cloud, Settings, Users, Bot } from "lucide-react";

export const ChoosingTips = () => {
  return (
    <div className="mt-16">
      <PageText variant="h2" className="mb-8">
        Tips for Choosing the Right Google Phone
      </PageText>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Budget and Features</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Standard Pixel – Solid choice if your focus is on camera quality and swift updates without extra frills.</li>
            <li>Pixel Pro – Ideal for those who want advanced camera capabilities, higher refresh rates, or a more premium build.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Timing Your Purchase</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Launch Season – New Pixels typically release in the fall. Expect promotional carrier deals around these times.</li>
            <li>Holiday Sales – Black Friday, Boxing Day, or year-end sales can yield substantial discounts, especially on older models.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Signal className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Checking Carrier Coverage</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Data Demands – High-definition streaming or gaming? Look for unlimited data plans or robust 5G coverage in your area.</li>
            <li>Roaming Needs – If you travel frequently, choose carriers with favorable international roaming options.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            <Cloud className="w-8 h-8 text-primary" />
            <h3 className="text-xl font-semibold">Storage vs. Cloud</h3>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Built-In Storage – Decide between 128GB, 256GB, or higher if you shoot lots of 4K video.</li>
            <li>Google Photos – Take advantage of cloud storage, but check if original-quality backups cost extra.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};