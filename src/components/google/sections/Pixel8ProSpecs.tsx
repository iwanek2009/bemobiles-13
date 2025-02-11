
import React from 'react';

export const Pixel8ProSpecs = () => {
  const specs = [
    {
      category: "Display",
      specs: [
        "6.7-inch Super Actua display",
        "1-120 Hz refresh rate",
        "Up to 1,600 nits (HDR)",
        "Up to 2,400 nits (peak brightness)"
      ]
    },
    {
      category: "Camera System",
      specs: [
        "50 MP main camera with ƒ/1.68 aperture",
        "48 MP ultrawide camera with improved Macro Focus",
        "48 MP telephoto camera (Pixel's best zoom ever)",
        "10.5 MP front camera for sharp selfies",
        "Night Sight and Astrophotography capabilities",
        "Pro controls for advanced camera settings"
      ]
    },
    {
      category: "Performance",
      specs: [
        "Google Tensor G3 chip",
        "12 GB RAM",
        "5,050 mAh battery",
        "24+ hour battery life",
        "Up to 72 hours with Extreme Battery Saver",
        "Fast wireless charging",
        "Battery Share feature"
      ]
    },
    {
      category: "Security",
      specs: [
        "Titan M2 chip and security core",
        "Fingerprint Unlock",
        "Face Unlock",
        "VPN by Google One built-in",
        "7 years of security updates"
      ]
    },
    {
      category: "AI Features",
      specs: [
        "Gemini Nano built-in",
        "Magic Editor in Google Photos",
        "Audio Magic Eraser",
        "Live Translate (49 languages)",
        "Call Screen with spam detection",
        "Circle to Search feature"
      ]
    },
    {
      category: "Special Features",
      specs: [
        "Temperature sensor",
        "Car crash detection",
        "Crisis alerts for hazards",
        "Compatible with Galaxy® and Garmin® watches",
        "Can join FaceTime calls"
      ]
    },
    {
      category: "Price & Offers",
      specs: [
        "Starting from £899",
        "Financing: £37.46/month with 24-month financing",
        <a 
          href="https://store.google.com/gb/product/pixel_8_pro?hl=en-GB" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Check price in Google Store
        </a>
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Google Pixel 8 Pro - Full Technical Specifications</h2>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Category
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                Specifications
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {specs.map((item, index) => (
              <tr key={item.category} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.category}
                </td>
                <td className="px-6 py-4">
                  <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                    {item.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
