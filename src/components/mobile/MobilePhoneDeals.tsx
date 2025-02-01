import { Card, CardContent } from "@/components/ui/card";

export const MobilePhoneDeals = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          UK's Best Phone Deals Offers
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Imagine upgrading your smartphone without the stress of upfront costs, while enjoying the latest features and technology from top brands. At bemobiles.com, we simplify your search by breaking down the best mobile contract deals available today.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're a tech-savvy professional, a student on a budget, or someone who just loves cutting-edge gadgets, our guide will help you make an informed decision with ease and confidence.
        </p>
      </CardContent>
    </Card>
  );
};