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
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};