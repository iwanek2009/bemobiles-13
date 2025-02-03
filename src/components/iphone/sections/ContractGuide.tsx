import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const ContractGuide = () => {
  return (
    <div className="px-4 py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
          <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choosing the Right Model & Contract for Your Lifestyle
          </PageText>
          
          <PageText className="mb-6">
            Here are some friendly tips to help you pick the perfect phone and contract:
          </PageText>

          <div className="space-y-8">
            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText variant="h3" className="text-xl font-semibold mb-4">
                Define Your Priorities
              </PageText>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Photography & Multimedia:</span>
                  <span>Consider the{" "}
                    <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="text-primary hover:underline">iPhone 15 Pro</Link> or{" "}
                    <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="text-primary hover:underline">Pro Max</Link> for that extra camera punch and larger, more immersive display.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Everyday Essentials:</span>
                  <span>The standard{" "}
                    <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:underline">iPhone 15</Link> offers all the must-haves without breaking the bank.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Budget Considerations:</span>
                  <span>Look for deals like{" "}
                    <Link to="/mobile-phones/phone-contracts-under-40" className="text-primary hover:underline">phone contracts under £40</Link> or even{" "}
                    <Link to="/mobile-phones/no-upfront-cost-phones" className="text-primary hover:underline">no upfront cost plans</Link>, which can make owning a premium device more accessible.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText variant="h3" className="text-xl font-semibold mb-4">
                Evaluate Your Usage
              </PageText>
              <PageText>
                Are you a heavy data user? A plan with{" "}
                <Link to="/mobile-phones/unlimited-data-iphone-deals" className="text-primary hover:underline">unlimited data</Link> might be ideal. If you're a student or on a tight budget, checking out{" "}
                <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:underline">iPhone 15 Deals</Link> with lower monthly fees can make a significant difference.
              </PageText>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText variant="h3" className="text-xl font-semibold mb-4">
                Future-Proofing
              </PageText>
              <PageText>
                Consider how your needs might change over the next year. If you're already part of Apple's ecosystem, upgrading now means enjoying benefits like enhanced iOS security and seamless accessory integration for years to come.
              </PageText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};