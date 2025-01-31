import React from 'react';

export const GoogleHeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
      <div className="container mx-auto px-4 pb-0 pt-16 md:py-0">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Google phone deals.
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Experience pure Android with Google's Pixel phones, featuring exceptional camera capabilities and AI-powered features.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[320px] w-full md:mt-5">
            <img
              src="/lovable-uploads/8e34dd3d-43b9-45d2-a7bf-58b162b8eedb.png"
              alt="Google Pixel phones in various colors"
              className="absolute inset-0 w-full h-full object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};