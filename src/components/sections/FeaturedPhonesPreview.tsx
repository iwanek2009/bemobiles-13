
import React from 'react';
import { Smartphone, Shield, Search } from 'lucide-react';

const FeaturedPhonesPreview = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Featured Phone Deals in Southampton
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Looking for the latest phone deals in Southampton? Our comparison tool helps you find and compare deals across all major networks.
        </p>
      </div>

      <div className="grid gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Latest Flagship Phones Available</h3>
          </div>
          <p className="text-gray-600 mb-4">Get the newest smartphones with competitive contract deals in Southampton:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <a href="/mobile-phones/iPhone-15-Deals" className="text-blue-600 hover:underline font-medium">iPhone 15</a>
                <span className="text-gray-600 ml-1">with unlimited data options and flexible contracts</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <a href="/mobile-phones/Galaxy-S24-Deals" className="text-blue-600 hover:underline font-medium">Samsung Galaxy S24</a>
                <span className="text-gray-600 ml-1">featuring the latest Android technology</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <a href="/mobile-phones/Google-Pixel-8-Pro-Deals" className="text-blue-600 hover:underline font-medium">Google Pixel 8 Pro</a>
                <span className="text-gray-600 ml-1">with advanced camera capabilities</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Popular Mid-Range Options</h3>
          </div>
          <p className="text-gray-600 mb-4">Looking for reliable phones with great value? Check out these options:</p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>
                <a href="/mobile-phones/iPhone-13-Deals" className="text-blue-600 hover:underline font-medium">iPhone 13</a>
                <span className="text-gray-600 ml-1">offering excellent performance at a more accessible price</span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Additional iPhone 13 variants with different storage options and colors</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Wide range of contract lengths and data allowances available</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Why Compare Deals with Us?</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">See all available offers from major networks in one place</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Compare contract lengths and data allowances</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Find exclusive online deals and promotions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Choose the perfect package for your needs</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-600 bg-blue-50 p-6 rounded-xl">
        <p>Use our comparison tool to explore all these phones and more, finding the best mobile deal in Southampton that matches your requirements. Each listing shows detailed contract information and network availability.</p>
      </div>
    </section>
  );
};

export default FeaturedPhonesPreview;
