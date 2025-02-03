import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const IPhone15Family = () => {
  return (
    <div className="mt-12 px-4 py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
          <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Exploring the iPhone 15 Family
          </PageText>
          
          <PageText variant="h3" className="text-2xl font-semibold text-gray-800 mb-4">
            Which iPhone 15 is Right for You?
          </PageText>
          
          <PageText className="mb-6">
            The iPhone 15 series offers something for everyone. Here's a quick rundown:
          </PageText>

          <div className="space-y-8">
            <div>
              <PageText variant="h3" className="text-xl font-semibold mb-3">
                <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:underline">iPhone 15</Link> & <Link to="/mobile-phones/iPhone-15-Plus-Deals" className="text-primary hover:underline">iPhone 15 Plus</Link> Deals
              </PageText>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-2">
                  <span className="font-semibold">Great for Everyday Use:</span>
                  These models offer a perfect balance of performance, battery life, and ease-of-use for daily tasks.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Key Perks:</span>
                  Enjoy Face ID security, a smooth display with ProMotion technology, and a user-friendly design that makes multitasking a breeze.
                </li>
              </ul>
            </div>

            <div>
              <PageText variant="h3" className="text-xl font-semibold mb-3">
                <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="text-primary hover:underline">iPhone 15 Pro</Link> & <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="text-primary hover:underline">iPhone 15 Pro Max</Link> Deals
              </PageText>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-2">
                  <span className="font-semibold">For Power Users & Creatives:</span>
                  With advanced camera setups, enhanced processing power, and even more vibrant displays, these models are tailor-made for photography enthusiasts, gamers, and professionals.
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">Standout Features:</span>
                  Dynamic Island for interactive notifications, refined camera systems for stunning low-light shots, and cutting-edge battery optimization.
                </li>
              </ul>
            </div>
          </div>

          <PageText className="mt-8 text-gray-600">
            No matter which model you choose, you'll experience the seamless integration of iOS that makes tasks like syncing your AirPods or Apple Watch practically magical.
          </PageText>
        </div>
      </div>
    </div>
  );
};