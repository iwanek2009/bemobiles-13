import { Header } from "@/components/Header";
import { BrandFilter } from "@/components/BrandFilter";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { useSearchParams } from "react-router-dom";

const MobilePhones = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const filter = filterParam ? { families: [Number(filterParam)] } : undefined;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#29B6F6] relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Contract phones.
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Our best mobile deals on the UK's biggest networks.
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
            <img 
              src="/lovable-uploads/10f62c25-cd06-48e2-8af0-20d87dc8af98.png"
              alt="iPhone Pro"
              className="h-full w-full object-contain object-right"
            />
          </div>
        </div>
      </div>

      <BrandFilter />
      <StickeeWidget filter={filter} />
      <Footer />
    </div>
  );
};

export default MobilePhones;