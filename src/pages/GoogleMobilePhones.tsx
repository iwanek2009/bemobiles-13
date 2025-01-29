import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";

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
                src="/lovable-uploads/b53f9160-6075-444a-abe9-c8b4b56362ea.png"
                alt="Google Pixel smartphone"
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <StickeeWidget filter={{ brands: [7] }} />
      <Footer />
    </div>
  );
};

export default GoogleMobilePhones;