import { Link } from "react-router-dom";

export const GalaxyS25Guide = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#2990dd]/10">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <section className="py-16 bg-white rounded-2xl shadow-lg backdrop-blur-sm bg-white/80 border border-gray-100 my-8">
          <div className="px-6 md:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Samsung Galaxy S25 Deals & Monthly Contracts
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Our comprehensive guide on the Samsung Galaxy S25 Deals & Monthly Contracts! Whether you're a long-time Samsung enthusiast or looking to upgrade from your current device, this article is your one-stop resource for understanding the latest offers, in-depth feature comparisons, and smart contract options available on bemobiles.com.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              We're here to help you navigate the complex world of smartphone deals with a friendly, approachable tone—think of it as a chat with a knowledgeable friend who's excited about next-gen tech!
            </p>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              We'll break down the standout features of the Samsung Galaxy S25, compare it with top competitors like the{' '}
              <Link to="/google-pixel-8-pro-deals" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">Google Pixel 8 Pro</Link> and the{' '}
              <Link to="/iphone-16-pro-deals" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">iPhone 16 Pro</Link>, and explain contract details including{' '}
              <Link to="/no-upfront-cost-phones" className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors">no upfront cost plans</Link>, trade-in offers, and bundle deals. Plus, we've packed in interactive elements like comparison tables, embedded video suggestions, and an FAQ section to ensure you have all the information you need to make an informed purchasing decision.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};