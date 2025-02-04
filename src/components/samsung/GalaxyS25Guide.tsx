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
              <Link to="/mobile-phones/google-pixel-8-pro-deals" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">Google Pixel 8 Pro</Link> and the{' '}
              <Link to="/mobile-phones/iphone-16-pro-deals" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">iPhone 16 Pro</Link>, and explain contract details including{' '}
              <Link to="/mobile-phones/no-upfront-cost" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">no upfront cost plans</Link>, trade-in offers, and bundle deals.
            </p>

            <div className="mt-12 space-y-6 bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900">
                Samsung Galaxy S25: Future of Mobile Technology
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                In today's rapidly evolving tech landscape, a smartphone isn't just a communication device—it's an extension of your digital lifestyle. The Samsung Galaxy S25 represents the pinnacle of innovation, merging cutting-edge hardware with intelligent software to deliver an experience that's both powerful and intuitive.
              </p>

              <p className="text-gray-600 leading-relaxed text-lg">
                Imagine capturing every breathtaking moment with a camera system that adapts to your environment, enjoying a battery that keeps pace with your busy schedule, and interacting with a display that brings content to life in vivid detail. Whether you're comparing it to the{' '}
                <Link to="/mobile-phones/google-pixel-8-pro-deals" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">Google Pixel 8 Pro</Link>'s remarkable camera or the seamless performance of the{' '}
                <Link to="/mobile-phones/iphone-16-pro-deals" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">iPhone 16 Pro</Link>, the Galaxy S25 is designed to impress. And with a variety of flexible contract options, from{' '}
                <Link to="/mobile-phones/no-upfront-cost" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">no upfront cost plans</Link> to{' '}
                <Link to="/mobile-phones/phone-contracts-under-20" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">Phone contracts under £20</Link> and trade-in offers, upgrading to the latest technology has never been easier or more affordable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};