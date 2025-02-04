import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

export const NoUpfrontContent = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Mobile Phone Deals With No Upfront Cost
                </PageText>
                <PageText variant="h3" className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  Discover Exclusive Mobile Phone Deals With No Upfront Cost – iPhone, Pixel & Galaxy Offers
                </PageText>
              </div>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  In the market for a new smartphone but don't have the budget to pay out all at once? Whether you have your eyes set on the latest{" "}
                  <Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhone</Link>,{" "}
                  <Link to="/google-mobile-phones" className="text-primary hover:underline">Pixel</Link> or{" "}
                  <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Galaxy</Link>, now you can carry — quite literally — some of the best handheld devices without paying upfront. Hello black Friday, let's crash course you on how all this works and how to choose the right phone for you — easy peasy and friendly!
                </p>

                <p>
                  Now, imagine setting foot in a store (or tapping online) and walking away with a brand-new smartphone — no exorbitant down payment necessary. Sounds too good to be true? These days, with the availability of payment plans and carrier contracts, it's entirely possible! Whether you need a rewarding upgrade or want to get your kid a smartphone for school, these smartphone deals with no upfront cost are made to suit your budget and daily life.
                </p>

                <div className="bg-blue-50 p-6 rounded-xl space-y-4">
                  <p className="font-semibold">Popular brands to consider:</p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/iphone-mobile-phones" className="text-primary hover:underline">Apple</Link>,{" "}
                    <Link to="/google-mobile-phones" className="text-primary hover:underline">Google</Link>,{" "}
                    <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung</Link>,{" "}
                    <Link to="/sony-mobile-phones" className="text-primary hover:underline">Sony</Link>,{" "}
                    <Link to="/honor-mobile-phones" className="text-primary hover:underline">Honor</Link>,{" "}
                    and more.
                  </div>
                  <p className="font-semibold mt-4">Why it matters:</p>
                  <p>Save money upfront while enjoying cutting-edge features and seamless connectivity.</p>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-blue-50/80 to-white/90 p-8 rounded-2xl backdrop-blur-sm shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Samsung Galaxy S25: Future of Mobile Technology
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    In today's rapidly evolving tech landscape, a smartphone isn't just a communication device—it's an extension of your digital lifestyle. The Samsung Galaxy S25 represents the pinnacle of innovation, merging cutting-edge hardware with intelligent software to deliver an experience that's both powerful and intuitive.
                  </p>
                  <p>
                    Imagine capturing every breathtaking moment with a camera system that adapts to your environment, enjoying a battery that keeps pace with your busy schedule, and interacting with a display that brings content to life in vivid detail. Whether you're comparing it to the{' '}
                    <Link to="/mobile-phones/google-pixel-8-pro-deals" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">
                      Google Pixel 8 Pro
                    </Link>'s remarkable camera or the seamless performance of the{' '}
                    <Link to="/mobile-phones/iphone-16-pro-deals" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">
                      iPhone 16 Pro
                    </Link>, the Galaxy S25 is designed to impress. And with a variety of flexible contract options, from{' '}
                    <Link to="/mobile-phones/no-upfront-cost" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">
                      no upfront cost plans
                    </Link> to{' '}
                    <Link to="/mobile-phones/Phone-contracts-under-£20" className="font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 transition-colors duration-200">
                      Phone contracts under £20
                    </Link> and trade-in offers, upgrading to the latest technology has never been easier or more affordable.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
