
import React from 'react';

export const PixelSpecsTable = () => {
  const specs = [
    {
      category: "Display",
      specs: [
        "Super Actua display",
        "120 Hz refresh rate",
        "6.3\" (Pro) / 6.8\" (Pro XL)",
        "Brightest Pixel display ever"
      ]
    },
    {
      category: "Camera System",
      specs: [
        "50 MP main camera (ƒ/1.68 aperture)",
        "48 MP telephoto",
        "48 MP ultrawide with Macro Focus",
        "42 MP front camera",
        "8K video capability",
        "20x Super Res Zoom Video"
      ]
    },
    {
      category: "Performance",
      specs: [
        "Google Tensor G4 chip",
        "16 GB RAM",
        "Battery life: over 24 hours (up to 100 hours with Extreme Battery Saver)",
        "Fast charging: 70% in about 30 minutes (Pro XL)"
      ]
    },
    {
      category: "AI Features",
      specs: [
        "Built-in Gemini AI assistant",
        "Magic Editor for advanced photo editing",
        "Circle to Search feature",
        "Pixel Screenshots with AI search"
      ]
    },
    {
      category: "Design & Build",
      specs: [
        "Silky matt glass back",
        "Dual-finish camera bar",
        "Polished-finish metal frame"
      ]
    },
    {
      category: "Software Support",
      specs: [
        "7 years of OS updates",
        "7 years of security updates",
        "Regular Pixel Drop features"
      ]
    },
    {
      category: "Special Offers",
      specs: [
        "Trade-in value up to £545",
        "Free 1-year Gemini Advanced (Google One AI Premium plan)",
        "2 TB cloud storage included"
      ]
    },
    {
      category: "Price",
      specs: [
        "Starting from £799 (£200 off from £999)",
        "Financing available: £33.29/month for 24 months",
        <a 
          href="https://store.google.com/gb/product/pixel_9_pro?hl=en-GB" 
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Google Pixel 9 Pro - Technical Specifications</h2>
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
