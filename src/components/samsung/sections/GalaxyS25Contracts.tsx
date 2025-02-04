import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const GalaxyS25Contracts = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Contract Details: Flexible Options to Fit Every Lifestyle
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Monthly Plans & No Upfront Cost Deals</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">No Upfront Cost Options:</h4>
              <p className="text-gray-600">
                Many carriers now offer plans with zero initial payment, making it easier to secure the latest technology without a large upfront expense.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Budget-Friendly Contracts:</h4>
              <p className="text-gray-600">
                Look for deals like{' '}
                <Link to="/mobile-phones/phone-contracts-under-20" className="text-blue-600 hover:underline">
                  Phone contracts under £20
                </Link>{' '}
                or{' '}
                <Link to="/mobile-phones/phone-contracts-under-30" className="text-blue-600 hover:underline">
                  Phone contracts under £30
                </Link>{' '}
                that provide quality service without overspending.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Trade-In Offers</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Upgrade Affordably:</h4>
              <p className="text-gray-600">
                Trading in your old device can significantly reduce your monthly payments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Seamless Process:</h4>
              <p className="text-gray-600">
                Many trade-in offers are designed to be hassle-free, ensuring you can quickly upgrade to the Galaxy S25.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};