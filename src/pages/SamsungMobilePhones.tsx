import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { manufacturers } from "@/data/manufacturers";

const SamsungMobilePhones = () => {
  const samsung = manufacturers.find(m => m.id === 'samsung');
  
  // Filter for Samsung phones (family ID 2 and brand ID 5)
  const filter = { 
    families: [2],
    brands: [5]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
        <div className="container mx-auto px-4 pb-0 pt-16 md:py-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Samsung phone deals.
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                {samsung?.description || "Discover Samsung's diverse range of smartphones, from premium Galaxy S series to innovative foldables."}
              </p>
            </div>
            <div className="relative h-[300px] md:h-[320px] w-full md:mt-5">
              <img
                src="/lovable-uploads/e5af43e9-0d34-4eab-8779-a0261436c139.png"
                alt="Samsung phones showcase"
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <StickeeWidget filter={filter} />
      <Footer />
    </div>
  );
};

export default SamsungMobilePhones;