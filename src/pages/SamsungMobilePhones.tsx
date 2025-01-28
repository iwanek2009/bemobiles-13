import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { manufacturers } from "@/data/manufacturers";
import { useSearchParams } from "react-router-dom";

const SamsungMobilePhones = () => {
  const samsung = manufacturers.find(m => m.id === 'samsung');
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const filter = {
    ...(filterParam ? { families: [Number(filterParam)] } : {}),
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
                src="/lovable-uploads/a0ce8510-21c9-4192-98da-ff063708d8b1.png"
                alt="Samsung Galaxy S23 Ultra smartphone"
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <StickeeWidget filter={filter} data-filters='{"brands":[5]}' />
      <Footer />
    </div>
  );
};

export default SamsungMobilePhones;