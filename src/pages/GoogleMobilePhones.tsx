import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { PageText } from "@/components/ui/page-text";
import { Wifi, Signal, Zap, Smartphone, Camera, Brain, Cloud } from "lucide-react";

const GoogleMobilePhones = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
        <div className="container mx-auto px-4 pb-0 pt-16 md:py-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Google phone deals.
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Experience pure Android with Google's Pixel phones, featuring exceptional camera capabilities and AI-powered features.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[320px] w-full md:mt-5">
              <img
                src="/lovable-uploads/8e34dd3d-43b9-45d2-a7bf-58b162b8eedb.png"
                alt="Google Pixel phones in various colors"
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <StickeeWidget filter={{ brands: [7, 15] }} />

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Google Phone Contract Deals: Your Ultimate Guide to Smart Savings
            </PageText>
            
            <PageText variant="h3" className="text-center mb-8">
              Three Key Benefits at a Glance
            </PageText>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-semibold text-xl mb-3">Lightning-Fast Downloads</h4>
                <p className="text-gray-600">
                  Enjoy top speeds on your Google phone—especially if you compare broadband offers to find the best internet in your area for swift updates and streaming.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                <Signal className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-semibold text-xl mb-3">Reliable Connection</h4>
                <p className="text-gray-600">
                  Stay online with fewer dropped calls or buffering. Pair a robust data plan and solid broadband provider to ensure a seamless experience—ideal for work and play.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
                <Wifi className="w-12 h-12 text-primary mb-4" />
                <h4 className="font-semibold text-xl mb-3">Low Latency</h4>
                <p className="text-gray-600">
                  Experience smoother video calls and online gaming. With the right connection speed, you'll breeze through multitasking and never miss a beat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PageText variant="h2" className="mb-6">
              Why Choose a Google Phone?
            </PageText>
            <PageText>
              Google phones, typically known as Pixel devices, offer standout features for everyday life. They run clean Android software—straight from Google—and usually get updates faster than most other smartphones. Many users praise their cameras for bright, detail-rich photos, even in low light. If you're craving an easy-to-use interface plus top-notch photo capabilities, a Google phone might be your perfect match.
            </PageText>

            <PageText variant="h2" className="mt-12 mb-6">
              How to Compare Google Phone Contract Deals
            </PageText>
            <PageText>
              Comparing deals for a new Google phone is not unlike comparing broadband services: you want the best price without skimping on quality. Below are quick steps to get you started:
            </PageText>

            <div className="mt-8 space-y-8">
              <div>
                <PageText variant="h3">Check Coverage</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Ensure you have a reliable mobile network in your area, much like checking for the best internet in [location].</li>
                  <li>Carriers usually have coverage maps. Verify your home and work locations for consistent signals.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">Assess Data Needs</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>If you stream movies or do online gaming, an unlimited data plan can be as crucial as a stable home broadband connection.</li>
                  <li>Light users may be fine with smaller data allowances, potentially saving money.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">Review Contract Length</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>12-Month Contracts: Typically higher monthly costs but you can upgrade sooner.</li>
                  <li>24-Month Contracts: Lower monthly costs but longer commitment.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">Examine Upfront Costs</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Some deals have zero upfront fees, while others require partial payment for the phone.</li>
                  <li>Watch out for promotional offers that reduce or waive initial costs entirely.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">Look for Extras</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Certain providers bundle perks like free streaming subscriptions, device insurance, or boosted roaming options.</li>
                </ul>
              </div>
            </div>

            <PageText variant="h2" className="mt-12 mb-6">
              What to Consider Before Signing a Contract
            </PageText>

            <div className="space-y-8">
              <div>
                <PageText variant="h3">1. Budget and Monthly Costs</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Overall Spend: Weigh the total cost of your plan (phone + data + extras) against your monthly income.</li>
                  <li>Hidden Fees: Check if the provider raises prices mid-contract or includes unplanned add-ons.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">2. Trade-In Programs</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Many carriers offer trade-ins for older phones.</li>
                  <li>You could significantly offset a new Google phone's cost by surrendering last year's device.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">3. Internet Speeds and Usage</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>If you rely on your phone for tethering or as a backup to home broadband, ensure your mobile data plan can handle high usage.</li>
                  <li>It's similar to evaluating connection speed for home internet: consider streaming, gaming, or remote work demands.</li>
                </ul>
              </div>

              <div>
                <PageText variant="h3">4. Customer Service and Reliability</PageText>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Some carriers excel in support, from quick tech assistance to easy billing.</li>
                  <li>User reviews or awards can help you identify providers who are consistently reliable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Pixel Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <PageText variant="h2" className="text-center mb-12">
              Find the Perfect Pixel
            </PageText>
            
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p>
                Google's Pixel smartphones have made quite a name for themselves with pure Android experiences, 
                top-tier camera performance, and seamless integration with Google services. Whether you're new 
                to Pixel or upgrading from a previous model, finding the right contract deal can be just as 
                important as choosing the device itself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Stock Android Experience</h3>
                </div>
                <p className="text-gray-600">
                  No heavy skins or bloatware. You get swift updates, timely security patches, and smooth performance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Exceptional Camera Systems</h3>
                </div>
                <p className="text-gray-600">
                  From stunning low-light shots to unique portrait modes, Pixel phones consistently rank among the top for mobile photography.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">AI-Driven Features</h3>
                </div>
                <p className="text-gray-600">
                  Real-time language translation, on-device call screening, and advanced voice commands harness Google's AI technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Cloud className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Seamless Ecosystem</h3>
                </div>
                <p className="text-gray-600">
                  Syncing your emails, photos, and files across devices is effortless with built-in Google services.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <PageText variant="h3" className="mb-6">Exploring the Pixel Lineup</PageText>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">Standard Pixel</h4>
                    <p className="text-gray-600 mb-4">Perfect for users who want a streamlined phone that delivers great performance without the higher price tag of Pro models.</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Clean Android Interface with day-one OS updates</li>
                      <li>High-Quality Camera that often beats premium competitors</li>
                      <li>Long Battery Life to last through a typical day of moderate use</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-xl font-semibold mb-4">Pixel Pro</h4>
                    <p className="text-gray-600 mb-4">Designed for power users craving top-of-the-line specs, a bigger screen, and premium camera innovations.</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Pro-Level Camera Setup with telephoto lenses for crisp zoom shots</li>
                      <li>Higher Refresh-Rate Display for fluid scrolling (e.g., 90Hz or 120Hz)</li>
                      <li>More Robust Battery for those who need extended screen-on time</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <PageText variant="h3" className="mb-6">Latest Features</PageText>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <ul className="list-disc pl-6 space-y-4 text-gray-600">
                    <li>
                      <span className="font-semibold">Upgraded Tensor Chip:</span> Google's in-house processor focuses on AI tasks, enhancing voice recognition, photography, and overall performance.
                    </li>
                    <li>
                      <span className="font-semibold">Enhanced Camera Features:</span> Improved Night Sight for low-light photography, Magic Eraser for editing out distractions, and advanced portrait modes.
                    </li>
                    <li>
                      <span className="font-semibold">Adaptive Battery & Charging:</span> Smarter battery allocation to apps you use most, along with faster charging speeds.
                    </li>
                    <li>
                      <span className="font-semibold">Software Exclusives:</span> Features like Live Translate and advanced spam call screening.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GoogleMobilePhones;
