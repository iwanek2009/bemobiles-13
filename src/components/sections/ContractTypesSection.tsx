
import React from 'react';
import { Smartphone, CreditCard, Briefcase, Cpu } from 'lucide-react';

const ContractTypesSection = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Compare Phone Contract Types</h2>
      
      <p className="text-gray-600 mb-8 text-center">
        When searching for mobile phone deals in Southampton, understanding the different contract types is essential. Each option offers unique benefits to suit different needs and budgets.
      </p>

      <div className="space-y-6">
        {/* Pay Monthly Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Pay Monthly Phone Contracts</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            Looking for mobile phone deals in Southampton that include the latest devices? Pay monthly contracts combine a new phone with a monthly plan:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Latest phones from manufacturers like 
                <a href="/iphone-mobile-phones" className="text-blue-600 hover:underline mx-1">Apple</a>,
                <a href="/samsung-mobile-phones" className="text-blue-600 hover:underline mx-1">Samsung</a>, and
                <a href="/google-mobile-phones" className="text-blue-600 hover:underline mx-1">Google</a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Fixed monthly payments covering both device and usage with 
                <a href="/mobile-phones/Phone-contracts-under-50" className="text-blue-600 hover:underline mx-1">affordable options available</a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Choice of contract lengths from 12 to 36 months</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Various data, minutes, and texts packages</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Phone upgrade options available with selected mobile phone deals in Southampton</span>
            </li>
          </ul>
        </div>

        {/* SIM-Only Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">SIM-Only Deals</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            Southampton residents with existing phones can find great value in SIM-only deals:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Lower monthly costs compared to phone contracts</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">More flexible contract lengths, including 30-day rolling plans</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Generous data allowances at competitive prices</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Easy to switch between networks</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Perfect for using with your current phone</span>
            </li>
          </ul>
        </div>

        {/* Pay As You Go Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Pay As You Go Options</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            For those seeking flexible mobile phone deals in Southampton:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">No credit checks required</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Top up only when needed</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">No long-term commitments</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Ideal for occasional users</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Great for temporary residents in Southampton</span>
            </li>
          </ul>
        </div>

        {/* Business Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Business Mobile Contracts</h3>
          </div>
          
          <p className="text-gray-600 mb-4">
            Southampton businesses can access specialized mobile phone deals:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Multiple handsets under one account</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Shared data plans across devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Dedicated business support</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Additional features like overseas usage</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-600">Tax-efficient payment options</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
        <p className="text-gray-600">
          Our comparison tool helps you explore all types of mobile phone deals in Southampton, making it easy to find the perfect contract for your needs. Compare different options side by side and discover which deal offers the best value for your requirements.
        </p>
      </div>
    </section>
  );
};

export default ContractTypesSection;
