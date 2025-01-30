import { Header } from "@/components/Header";
import { BrandFilter } from "@/components/BrandFilter";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { useSearchParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const MobilePhones = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const filter = filterParam ? { families: [Number(filterParam)] } : undefined;

  useSEO({
    title: "Mobile Phone Deals & Contracts | Best UK Phone Deals",
    description: "Compare the best mobile phone deals and contracts from UK's leading networks. Find amazing offers on the latest smartphones with flexible payment options."
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
        <div className="container mx-auto px-4 pb-0 pt-16 md:py-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contract phones deals.
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Best mobile phone deals on the UK's biggest networks.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[320px] w-full md:mt-5">
              <img
                src="/lovable-uploads/9faf7347-cd7d-4837-bc81-2e870b83dd8a.png"
                alt="Latest iPhone models showing Pro and regular versions"
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
                fetchPriority="high"
                width="800"
                height="800"
                decoding="async"
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

export default MobilePhones;