import { GalaxyS25Features } from "./sections/GalaxyS25Features";
import { GalaxyS25Performance } from "./sections/GalaxyS25Performance";
import { GalaxyS25Display } from "./sections/GalaxyS25Display";
import { GalaxyS25Contracts } from "./sections/GalaxyS25Contracts";

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
              Our comprehensive guide on the Samsung Galaxy S25 Deals & Monthly Contracts! Whether you're a long-time Samsung enthusiast or looking to upgrade from your current device, this article is your one-stop resource for understanding the latest offers, in-depth feature comparisons, and smart contract options available on bemobiles.com. We're here to help you navigate the complex world of smartphone deals with a friendly, approachable tone—think of it as a chat with a knowledgeable friend who's excited about next-gen tech! We'll break down the standout features of the Samsung Galaxy S25, compare it with top competitors like the Google Pixel 8 Pro and the iPhone 16 Pro, and explain contract details including no upfront cost plans, trade-in offers, and bundle deals. Plus, we've packed in interactive elements like comparison tables, embedded video suggestions, and an FAQ section to ensure you have all the information you need to make an informed purchasing decision.
            </p>

            <GalaxyS25Features />
            <GalaxyS25Performance />
            <GalaxyS25Display />
            <GalaxyS25Contracts />
          </div>
        </section>
      </div>
    </div>
  );
};