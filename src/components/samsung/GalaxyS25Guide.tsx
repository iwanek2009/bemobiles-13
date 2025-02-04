import { PageText } from "@/components/ui/page-text";

export const GalaxyS25Guide = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#2990dd]/10">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <section className="py-12 space-y-8">
          <div className="space-y-6">
            <PageText variant="h1" className="text-4xl font-bold text-gray-900">
              Samsung Galaxy S25 Deals & Monthly Contracts: Your Ultimate Guide to Next-Gen Savings
            </PageText>
            
            <PageText className="text-gray-700 leading-relaxed">
              Welcome to our comprehensive guide on the Samsung Galaxy S25 Deals & Monthly Contracts! Whether you're a long-time Samsung enthusiast or looking to upgrade from your current device, this article is your one-stop resource for understanding the latest offers, in-depth feature comparisons, and smart contract options available on bemobiles.com. We're here to help you navigate the complex world of smartphone deals with a friendly, approachable tone—think of it as a chat with a knowledgeable friend who's excited about next-gen tech!
            </PageText>

            <PageText className="text-gray-700 leading-relaxed">
              In this guide, we'll break down the standout features of the Samsung Galaxy S25, compare it with top competitors like the Google Pixel 8 Pro and the iPhone 16 Pro, and explain contract details including no upfront cost plans, trade-in offers, and bundle deals. Plus, we've packed in interactive elements like comparison tables, embedded video suggestions, and an FAQ section to ensure you have all the information you need to make an informed purchasing decision.
            </PageText>
          </div>

          <div className="space-y-6">
            <PageText variant="h2" className="text-3xl font-bold text-gray-900">
              Introduction: Embrace the Future of Mobile Technology
            </PageText>
            
            <PageText className="text-gray-700 leading-relaxed">
              In today's rapidly evolving tech landscape, a smartphone isn't just a communication device—it's an extension of your digital lifestyle. The Samsung Galaxy S25 represents the pinnacle of innovation, merging cutting-edge hardware with intelligent software to deliver an experience that's both powerful and intuitive.
            </PageText>

            <PageText className="text-gray-700 leading-relaxed">
              Imagine capturing every breathtaking moment with a camera system that adapts to your environment, enjoying a battery that keeps pace with your busy schedule, and interacting with a display that brings content to life in vivid detail. Whether you're comparing it to the Google Pixel 8 Pro's remarkable camera or the seamless performance of the iPhone 16 Pro, the Galaxy S25 is designed to impress. And with a variety of flexible contract options, from no upfront cost plans to Phone contracts under £20 and trade-in offers, upgrading to the latest technology has never been easier or more affordable.
            </PageText>
          </div>

          <div className="space-y-6">
            <PageText variant="h2" className="text-3xl font-bold text-gray-900">
              Feature Breakdown: Galaxy S25 vs. The Competition
            </PageText>

            <div className="space-y-4">
              <PageText variant="h3" className="text-2xl font-semibold text-gray-900">
                1. Camera Capabilities
              </PageText>
              
              <PageText className="text-gray-700">
                The Samsung Galaxy S25 is engineered to satisfy even the most demanding photography enthusiasts:
              </PageText>

              <div className="space-y-4">
                <div>
                  <PageText variant="h4" className="text-xl font-semibold text-gray-900">
                    Advanced Sensor Technology:
                  </PageText>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Capture ultra-high-resolution images that reveal every detail.</li>
                    <li>Features an innovative sensor that adapts to various lighting conditions, ensuring crisp shots whether you're in bright daylight or low-light settings.</li>
                  </ul>
                </div>

                <div>
                  <PageText variant="h4" className="text-xl font-semibold text-gray-900">
                    Pro-Grade Camera Modes:
                  </PageText>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Night Mode: Just like the renowned Night Sight on the Google Pixel 8 Pro, the S25's Night Mode lets you shoot stunning low-light photos with minimal noise.</li>
                    <li>AI-Powered Enhancements: Utilize smart algorithms to automatically adjust settings for optimal clarity and color accuracy.</li>
                  </ul>
                </div>
              </div>

              <PageText variant="h3" className="text-2xl font-semibold text-gray-900 mt-6">
                2. Battery Life and Performance
              </PageText>
              
              <PageText className="text-gray-700">
                The Galaxy S25 is built to keep up with your busiest days:
              </PageText>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Long-Lasting Battery</li>
                <li>Fast Charging and Wireless Power</li>
                <li>Smart Power Management</li>
              </ul>

              <PageText variant="h3" className="text-2xl font-semibold text-gray-900 mt-6">
                3. Display and User Experience
              </PageText>
              
              <PageText className="text-gray-700">
                A display that truly captivates makes all the difference:
              </PageText>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dynamic AMOLED Display</li>
                <li>Adaptive Refresh Rate</li>
                <li>User-Centric Design</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};