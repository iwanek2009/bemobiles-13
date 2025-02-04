import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const GalaxyS25Guide = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#2990dd]/10">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <section className="py-12 bg-white">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-6">
            Samsung Galaxy S25: The Future of Mobile Innovation
          </h2>
          
          <div className="flex gap-4 mb-8">
            <Link 
              to="/google-pixel-8-pro-deals" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Compare with Pixel 8 Pro
            </Link>
            <Link 
              to="/iphone-16-pro-deals" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Compare with iPhone 16 Pro
            </Link>
            <Link 
              to="/no-upfront-cost-phones" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              No Upfront Cost Options
            </Link>
          </div>

          <h3 className="text-2xl font-semibold text-[#111111] mb-4">
            Samsung Galaxy S25 Deals & Monthly Contracts
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Our comprehensive guide on the Samsung Galaxy S25 Deals & Monthly Contracts! Whether you're a long-time Samsung enthusiast or looking to upgrade from your current device, this article is your one-stop resource for understanding the latest offers, in-depth feature comparisons, and smart contract options available on bemobiles.com.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We're here to help you navigate the complex world of smartphone deals with a friendly, approachable tone—think of it as a chat with a knowledgeable friend who's excited about next-gen tech!
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We'll break down the standout features of the Samsung Galaxy S25, compare it with top competitors like the Google Pixel 8 Pro and the iPhone 16 Pro, and explain contract details including no upfront cost plans, trade-in offers, and bundle deals. Plus, we've packed in interactive elements like comparison tables, embedded video suggestions, and an FAQ section to ensure you have all the information you need to make an informed purchasing decision.
          </p>

          <h3 className="text-2xl font-semibold text-[#111111] mb-4">
            Key Features and Innovations
          </h3>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Advanced AI capabilities for enhanced photography and daily tasks</li>
            <li>Next-generation processor for unparalleled performance</li>
            <li>Improved camera system with revolutionary low-light capabilities</li>
            <li>Extended battery life with intelligent power management</li>
            <li>Enhanced security features for complete peace of mind</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#111111] mb-4">
            Display and Design Excellence
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Experience visual brilliance with the Galaxy S25's state-of-the-art display technology. The refined design combines premium materials with ergonomic excellence, creating a device that's both beautiful and practical for everyday use.
          </p>

          <h3 className="text-2xl font-semibold text-[#111111] mb-4">
            Camera System
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            Capture life's moments with unprecedented clarity through the Galaxy S25's advanced camera system. Whether you're shooting in bright daylight or low-light conditions, the AI-enhanced photography features ensure your memories are preserved in stunning detail.
          </p>
        </section>

        <section className="py-12 bg-[#F1F1F1]">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-6">
            Finding Your Perfect Galaxy S25 Deal
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            When choosing your Galaxy S25 contract, consider these key factors to ensure you get the best value for your needs:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Data allowance - Consider your monthly usage patterns</li>
            <li>Contract length - Balance monthly costs with commitment period</li>
            <li>Upfront costs - Look for deals with reduced initial payments</li>
            <li>Added benefits - Check for included extras like streaming subscriptions</li>
            <li>Network coverage - Ensure reliable service in your area</li>
          </ul>

          <h3 className="text-2xl font-semibold text-[#111111] mb-4">
            Why Choose the Galaxy S25?
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            The Galaxy S25 is more than just a phone - it's a gateway to the future of mobile technology. With its advanced AI capabilities, stunning camera system, and powerful performance, it's designed to enhance every aspect of your digital life.
          </p>
        </section>
      </div>
    </div>
  );
};
