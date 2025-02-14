import React from 'react';
import { ChevronRight } from 'lucide-react';
const PhoneModelsSection = () => {
  const models = [{
    name: "iPhone 15",
    description: "Perfect for casual users who want a balance of performance and price. Features solid performance, high-quality camera, and all-day battery life.",
    link: "/mobile-phones/iPhone-15-Deals",
    idealFor: "Students and professionals seeking a reliable device"
  }, {
    name: "iPhone 15 Plus",
    description: "Ideal for fans of bigger screens. Enjoy more display real estate for videos, reading, and social media, plus extended battery life.",
    link: "/mobile-phones/iPhone-15-Plus-Deals",
    idealFor: "Movie enthusiasts and social media users"
  }, {
    name: "iPhone 15 Pro",
    description: "For power users needing advanced features. Features ProMotion display, enhanced camera system, and premium build quality.",
    link: "/mobile-phones/iPhone-15-Pro-Deals",
    idealFor: "Content creators and mobile photographers"
  }, {
    name: "iPhone 16",
    description: "The latest standard iPhone with improved features and performance. Perfect balance of innovation and value.",
    link: "/mobile-phones/iPhone-16-Deals",
    idealFor: "Users wanting the newest technology"
  }, {
    name: "iPhone 16 Pro",
    description: "The newest pro model with cutting-edge features. Advanced camera capabilities and top-tier performance.",
    link: "/mobile-phones/iPhone-16-Pro-Deals",
    idealFor: "Professional users and tech enthusiasts"
  }];
  return <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Explore iPhone Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {models.map((model, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
            <p className="text-gray-600 mb-2">{model.description}</p>
            <p className="text-gray-500 text-sm mb-4">Ideal for: {model.idealFor}</p>
            <a href={model.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              View {model.name} Deals
              <ChevronRight size={20} />
            </a>
          </div>)}
      </div>
      <div className="text-center mt-6">
        <a href="/iphone-mobile-phones" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
          Compare All iPhone Deals
          <ChevronRight size={20} />
        </a>
      </div>
    </div>;
};
export default PhoneModelsSection;