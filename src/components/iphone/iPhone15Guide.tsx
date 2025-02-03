import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const IPhone15Guide = () => {
  return (
    <div className="space-y-12">
      <div className="mt-12 px-4 py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
            <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              iPhone 15 Deals & Pay Monthly Contracts
            </PageText>
            
            <PageText variant="h3" className="text-2xl font-semibold text-gray-800 mb-4">
              Your Friendly Guide to the Latest Smartphone Innovations
            </PageText>
            
            <div className="space-y-6 text-gray-600">
              <PageText>
                Hey there! If you're shopping for a new smartphone, you've probably been bombarded with excitement about the iPhone 15 lineup. So whether you're after the{" "}
                <Link to="/iphone-15-deals" className="text-primary hover:underline">standard iPhone 15</Link>, the bigger{" "}
                <Link to="/iphone-15-plus-deals" className="text-primary hover:underline">iPhone 15 Plus</Link>, or one of the extra-lush features that arrive with the{" "}
                <Link to="/iphone-15-pro-deals" className="text-primary hover:underline">iPhone 15 Pro</Link> and{" "}
                <Link to="/iphone-15-pro-max-deals" className="text-primary hover:underline">iPhone 15 Pro Max</Link> you will have plenty of options open to you that make owning one easier than ever (especially if you're taking a pay monthly contract).
              </PageText>

              <PageText>
                This guide will help you compare the models, as well as features, and see how different contracts might fit into your budget and lifestyle. Then we'll casually juxtapose some rival offerings from other brands, like{" "}
                <Link to="/google-mobile-phones" className="text-primary hover:underline">Google</Link>,{" "}
                <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung</Link> and{" "}
                <Link to="/sony-mobile-phones" className="text-primary hover:underline">Sony</Link>, so you'll have all the info you'll need to make the best choice possible.
              </PageText>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
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
              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  iPhone 15 & iPhone 15 Plus Deals
                </PageText>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Great for Everyday Use:</span>
                    <span>These models offer a perfect balance of performance, battery life, and ease-of-use for daily tasks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Key Perks:</span>
                    <span>Enjoy Face ID security, a smooth display with ProMotion technology, and a user-friendly design that makes multitasking a breeze.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  iPhone 15 Pro & iPhone 15 Pro Max Deals
                </PageText>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">For Power Users & Creatives:</span>
                    <span>With advanced camera setups, enhanced processing power, and even more vibrant displays, these models are tailor-made for photography enthusiasts, gamers, and professionals.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Standout Features:</span>
                    <span>Dynamic Island for interactive notifications, refined camera systems for stunning low-light shots, and cutting-edge battery optimization.</span>
                  </li>
                </ul>
              </div>
            </div>

            <PageText className="mt-6 text-gray-700 italic">
              No matter which model you choose, you'll experience the seamless integration of iOS that makes tasks like syncing your AirPods or Apple Watch practically magical.
            </PageText>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
            <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ecosystem Advantages: Why iOS Stands Out
            </PageText>
            
            <PageText className="mb-6">
              When it comes to a smartphone, it's not just about the hardware—it's about the whole ecosystem. Here's why many users stick with Apple:
            </PageText>

            <div className="space-y-6">
              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  Seamless Integration
                </PageText>
                <PageText>
                  From your iPhone to your iPad, Mac, Apple Watch, and even HomePod, the ecosystem works in harmony. For instance, you can start an email on your iPhone and finish it on your Mac effortlessly.
                </PageText>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  Enhanced Security & Privacy
                </PageText>
                <PageText>
                  Apple's commitment to privacy ensures your data stays secure, giving you peace of mind as you navigate your digital life.
                </PageText>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  Intuitive User Experience
                </PageText>
                <PageText>
                  The simplicity and reliability of iOS mean less time fumbling with settings and more time enjoying your device. Once you experience features like instant Face ID unlocking, you might not want to switch to another ecosystem!
                </PageText>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText>
                  Of course, if you're considering alternatives, take a peek at offerings like the{" "}
                  <Link to="/google-pixel-8-deals" className="text-primary hover:underline">Google Pixel 8</Link> for its AI-driven camera or{" "}
                  <Link to="/galaxy-s24-ultra-deals" className="text-primary hover:underline">Galaxy S24 Ultra Deals</Link> if you're after customization and innovative features like the S Pen.
                </PageText>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
            <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choosing the Right Model & Contract for Your Lifestyle
            </PageText>
            
            <PageText className="mb-6">
              Here are some friendly tips to help you pick the perfect phone and contract:
            </PageText>

            <div className="space-y-6">
              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  Define Your Priorities
                </PageText>
                <ul className="space-y-4">
                  <li>
                    <span className="font-semibold">Photography & Multimedia:</span> Consider the{" "}
                    <Link to="/iphone-15-pro-deals" className="text-primary hover:underline">iPhone 15 Pro</Link> or{" "}
                    <Link to="/iphone-15-pro-max-deals" className="text-primary hover:underline">Pro Max</Link> for that extra camera punch and larger, more immersive display.
                  </li>
                  <li>
                    <span className="font-semibold">Everyday Essentials:</span> The standard{" "}
                    <Link to="/iphone-15-deals" className="text-primary hover:underline">iPhone 15</Link> offers all the must-haves without breaking the bank.
                  </li>
                  <li>
                    <span className="font-semibold">Budget Considerations:</span> Look for deals like{" "}
                    <Link to="/phone-contracts-under-40" className="text-primary hover:underline">phone contracts under £40</Link> or even{" "}
                    <Link to="/no-upfront-cost-phones" className="text-primary hover:underline">no upfront cost plans</Link>, which can make owning a premium device more accessible.
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-6">
                <PageText variant="h3" className="text-xl font-semibold mb-4">
                  Evaluate Your Usage
                </PageText>
                <PageText>
                  Are you a heavy data user? A plan with{" "}
                  <Link to="/unlimited-data-iphone-deals" className="text-primary hover:underline">unlimited data</Link> might be ideal. If you're a student or on a tight budget, checking out{" "}
                  <Link to="/iphone-15-deals" className="text-primary hover:underline">iPhone 15 Deals</Link> with lower monthly fees can make a significant difference.
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
    </div>
  );
};