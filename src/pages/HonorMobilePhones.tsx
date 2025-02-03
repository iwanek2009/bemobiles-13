import { TheMobile } from "@/components/templates/TheMobile";
import { PageText } from "@/components/ui/page-text";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { HonorCTASection } from "@/components/honor/sections/HonorCTASection";

const HonorMobilePhones = () => {
  useSEO({
    title: "Honor Mobile Contract Deals | Best UK Honor Phone Offers",
    description: "Discover unbeatable Honor mobile contract deals in the UK! Enjoy affordable payment plans, trade-in offers, and bundle promotions on the latest Honor phones at bemobiles.com."
  });

  return (
    <>
      <TheMobile
        title="Honor phone deals."
        description="Innovative smartphones combining style with cutting-edge technology at competitive prices."
        heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
        imageAlt="Honor smartphone showcasing premium design and features"
        filter={{ brands: [72] }}
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Best Honor Mobile Contract Deals — UK's Best Honor Phone Offers
            </PageText>
            
            <PageText className="text-gray-600 leading-relaxed space-y-6">
              <p>
                With the speed at which the smartphone world continues to evolve, finding the best deals and stays up to date can be as tricky as ever. Whether you're a <Link to="/iphone-mobile-phones" className="text-primary hover:underline">die-hard iOS user</Link>, a <Link to="/google-mobile-phones" className="text-primary hover:underline">Google Pixel lover</Link> or a <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung fan</Link>, there's something for you out there.
              </p>
              <p>
                But have you ever tried picking one of Honor phones? With their on-trend specs and attractive pricing, Honor is making a name for itself in the UK. In this handy guide, we're wading into the best Honor mobile contract deals out there on <Link to="/" className="text-primary hover:underline">bemobiles.com</Link>, to get guides on the ideal device and contract plan that suits your lifestyle.
              </p>
            </PageText>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Differences Between Models
            </PageText>
            
            <PageText className="mb-6">
              Learning about the distinctions between different types of smartphone models when shopping for a new one can save valuable time. Honor, which has a different design for all the phones within its N series as well as various options catered to everything from casual use to peak performance. Here's what to consider:
            </PageText>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <PageText variant="h3" className="mb-4">
                  Standard vs Pro Models
                </PageText>
                <div className="space-y-4">
                  <div>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Standard Models:
                    </PageText>
                    <PageText>
                      Best for everyday tasks, social media and casual photography. They're affordable while packing all of the basic features you might need.
                    </PageText>
                  </div>
                  <div>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Pro Models:
                    </PageText>
                    <PageText>
                      Designed for power users, with better cameras, extended battery life and enhanced processing power for multitasking and gaming.
                    </PageText>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <PageText variant="h3" className="mb-4">
                  Key Specs to Compare:
                </PageText>
                <ul className="space-y-4">
                  <li>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Battery Life:
                    </PageText>
                    <PageText>
                      Choose models with Will keep bringing you all day.
                    </PageText>
                  </li>
                  <li>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Camera Features:
                    </PageText>
                    <PageText>
                      From selfies to panoramic landscapes, Honor's AI-enhanced cameras never fail to impress.
                    </PageText>
                  </li>
                  <li>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Screen Quality:
                    </PageText>
                    <PageText>
                      Catch up on your favorite shows or play games on high-resolution screens that pop.
                    </PageText>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Contract Options & Carrier Deals
            </PageText>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 space-y-6 mb-12">
              <PageText>
                Getting a new phone shouldn't break the bank. That's why Honor's mobile contract deals are designed to offer flexibility and affordability:
              </PageText>

              <div className="space-y-4">
                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Monthly Payment Plans:
                  </PageText>
                  <PageText>
                    Spread the cost of your new Honor phone over manageable monthly installments—no need to pay the full price upfront.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Attractive Trade-In Offers:
                  </PageText>
                  <PageText>
                    Upgrade your device and save money by trading in your old smartphone for credit towards your new Honor model.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Bundle Promotions:
                  </PageText>
                  <PageText>
                    Look out for deals that combine your new phone with accessories like smartwatches and earbuds, giving you a complete tech package.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Family & Multi-Line Discounts:
                  </PageText>
                  <PageText>
                    Great for families or groups, these plans let you enjoy excellent deals when you sign up multiple lines.
                  </PageText>
                </div>
              </div>
            </div>

            <PageText variant="h2" className="text-center mb-8">
              Ecosystem Perks
            </PageText>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 space-y-6 mb-12">
              <PageText>
                While Honor may be a relatively new player in the smartphone ecosystem, its offerings are rapidly evolving to compete with industry giants:
              </PageText>

              <div className="space-y-4">
                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Seamless Integration with Smart Devices:
                  </PageText>
                  <PageText>
                    Sync your Honor phone with compatible smartwatches, tablets, and even home devices for a truly connected experience.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Intuitive User Interface:
                  </PageText>
                  <PageText>
                    Enjoy a clutter-free experience that makes everyday tasks like navigation, messaging, and multimedia consumption effortless.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Regular Software Updates:
                  </PageText>
                  <PageText>
                    Stay secure and enjoy new features as Honor continues to roll out improvements and updates for its devices.
                  </PageText>
                </div>
              </div>
            </div>

            <PageText variant="h2" className="text-center mb-8">
              Comparisons & Competitors
            </PageText>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
              <PageText>
                It's always useful to compare your options. Here's how Honor stacks up against some of the big names in the industry:
              </PageText>

              <div className="space-y-6">
                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Versus iPhone:
                  </PageText>
                  <PageText>
                    While <Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhones</Link> boast the iOS ecosystem with features like Face ID and Dynamic Island, Honor offers competitive performance at a more accessible price point—perfect if you're looking for value without compromise.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Versus Google Pixel:
                  </PageText>
                  <PageText>
                    Both brands emphasize camera quality and AI-driven features. However, Honor often provides a broader range of contract deals and customizable options than <Link to="/google-mobile-phones" className="text-primary hover:underline">Google Pixel</Link>, giving you more bang for your buck.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Versus Samsung Galaxy:
                  </PageText>
                  <PageText>
                    Honor holds its own with impressive display technology and battery life, and if you're a fan of cutting-edge features like the S Pen or foldable designs from <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung</Link>, it's worth comparing both to see which fits your lifestyle best.
                  </PageText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Tips for Choosing the Right Model
            </PageText>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
              <PageText>
                Picking the right smartphone can be as personal as choosing a favourite coffee blend. Here are some handy tips to help you decide:
              </PageText>

              <div className="space-y-4">
                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Budget vs. High-End:
                  </PageText>
                  <PageText>
                    Determine whether you need a basic phone for everyday tasks or a high-end model for gaming, photography, and multitasking.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Performance Needs:
                  </PageText>
                  <PageText>
                    Consider your primary use—if you're a heavy multitasker or a photography enthusiast, investing in a Pro model might be the way to go.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Size and Comfort:
                  </PageText>
                  <PageText>
                    Make sure the phone feels good in your hand. Whether you prefer a compact design or a larger screen for media consumption, comfort is key.
                  </PageText>
                </div>

                <div>
                  <PageText variant="h3" className="text-lg font-medium mb-2">
                    Future-Proofing with Upgrade Programs:
                  </PageText>
                  <PageText>
                    Look for contract deals that offer upgrade options, so you can easily transition to the latest model when it hits the market.
                  </PageText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HonorCTASection />
      
    </>
  );
};

export default HonorMobilePhones;
