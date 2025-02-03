import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const FeaturesAndContracts = () => {
  return (
    <div className="px-4 py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
          <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Must-Have Features That Make a Difference
          </PageText>
          
          <PageText className="mb-6">
            When you're comparing smartphones, it's not just about the specs—it's about how they enhance your daily life. Here are a few features you should keep an eye on:
          </PageText>

          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex gap-2">
              <span className="font-semibold">Dynamic Island & ProMotion:</span>
              These innovative display features provide smooth scrolling and a unique way to interact with notifications, making your phone feel like an extension of your personality.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">Camera Capabilities:</span>
              Whether you're snapping quick selfies or shooting professional-grade videos, the improved camera systems on the Pro models are designed to impress. Imagine capturing every detail even in low light, thanks to advanced sensors and AI-powered enhancements.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">Security & Convenience:</span>
              With Face ID and a secure iOS ecosystem, you'll enjoy not only top-notch protection for your data but also a seamless experience when unlocking your phone or authorizing payments.
            </li>
          </ul>

          <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Pay Monthly Contracts & Carrier Deals
          </PageText>
          
          <PageText className="mb-6">
            One of the best parts of upgrading your smartphone now is the range of flexible contract options available. Here's what to look for when choosing your plan:
          </PageText>

          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex gap-2">
              <span className="font-semibold">Flexible Payment Plans:</span>
              Spread the cost of your new iPhone over affordable monthly payments. Many deals offer iPhone Phone contracts with little to no upfront cost, making it easier to manage your budget.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">Trade-In Offers & Bundles:</span>
              Upgrade your old device and save! Trade-in programs can lower your monthly bill, and bundle deals (like phone + watch + earbuds) are a great way to get more bang for your buck.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold">Family & Unlimited Data Plans:</span>
              If you're part of a family or rely on streaming and social media throughout the day, look for contracts featuring{" "}
              <Link to="/mobile-phones/Unlimited-data-iPhone-Deals" className="text-primary hover:underline">unlimited data iPhone Deals</Link>. Some carriers even offer plans starting with options like{" "}
              <Link to="/mobile-phones/Phone-contracts-under-20" className="text-primary hover:underline">phone contracts under £20</Link> or{" "}
              <Link to="/mobile-phones/Phone-contracts-under-30" className="text-primary hover:underline">phone contracts under £30</Link>, perfect for those who need a cost-effective solution.
            </li>
          </ul>

          <PageText className="text-gray-600">
            These deals aren't exclusive to Apple—explore other options like{" "}
            <Link to="/mobile-phones/samsung-mobile-phones" className="text-primary hover:underline">Samsung Phone contracts</Link> or{" "}
            <Link to="/mobile-phones/google-mobile-phones" className="text-primary hover:underline">Google Phone contracts</Link> if you're curious about what the competition offers. And for those who love a bargain, don't overlook opportunities like{" "}
            <Link to="/mobile-phones/Refurbished-mobile-Phone-contracts" className="text-primary hover:underline">refurbished phone contracts</Link> for a smart and sustainable choice.
          </PageText>
        </div>
      </div>
    </div>
  );
};
