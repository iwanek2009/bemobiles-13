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
      <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
          </div>
        </div>
      </div>

      <StickeeWidget filter={filter} />
      <Footer />
    </div>
  );
};

export default MobilePhones;