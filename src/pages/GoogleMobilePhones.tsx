import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { PageText } from "@/components/ui/page-text";
import { Wifi, Signal, Zap } from "lucide-react";

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

      <Footer />
    </div>
  );
};

export default GoogleMobilePhones;