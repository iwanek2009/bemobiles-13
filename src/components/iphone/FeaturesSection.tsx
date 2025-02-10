
import React from 'react';
import { Card } from '@/components/ui/card';

const FeaturesSection = () => {
  return (
    <Card className="w-full max-w-4xl p-6 bg-white">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Why Choose the iPhone 15 Pro Max?</h2>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Design and Display</h3>
            <p className="text-gray-700">The iPhone 15 Pro Max boasts a premium titanium body that makes it lighter and more durable than ever. Its iPhone lineup also supports a massive 6.7-inch Super Retina XDR display that enables ProMotion 120Hz for gorgeous visuals and a top display upgrade. The Always-On display lets it show important information but saves battery life in the process.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">The Camera System</h3>
            <p className="text-gray-700">Remembered all flagship-range specs with an advanced camera setup featuring a 48MP main sensor and a groundbreaking 5x telephoto zoom. Great for getting crisp images and videos close or far away — ideal for everything from portraits to mountain ranges.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Performance and Battery</h3>
            <p className="text-gray-700">Powered by the A17 Pro chip, it breezes through everything from everyday tasks to console-quality gaming. The huge battery offers fantastic life, working up to 29 hours of video playback. Thanks to fast charging support, you can achieve 50% in just 30 minutes.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Additional Premium Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>High speed Thunderbolt 10GB/s USB-C port</li>
              <li>Configurable Action button for quick access to favorite features</li>
              <li>Safety and security features like Emergency SOS and Crash Detection</li>
              <li>Support for ProRes video recording</li>
              <li>The 5G performance that leads the industry</li>
            </ul>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default FeaturesSection;
