import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const MobileContractDeals = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Mobile Contract Deals
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Looking for the perfect mobile contract that combines great smartphone deals with flexible payment plans? Whether you're eyeing an{' '}
          <Link to="/iphone-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Apple</Link>,{' '}
          <Link to="/google-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Google</Link>,{' '}
          <Link to="/samsung-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Samsung</Link>, or{' '}
          <Link to="/sony-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Sony</Link> device, 
          bemobiles.com is here to help you navigate the world of mobile contracts and carrier offers in the UK.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          From the latest releases to unbeatable bundle deals, read on for our friendly, expert guide to choosing the best phone and contract that suits your lifestyle.
        </p>
      </CardContent>
    </Card>
  );
};