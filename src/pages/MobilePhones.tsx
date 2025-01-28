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
      <div className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile Phones</h1>
          <p className="text-gray-600">Find the perfect mobile phone deal for you</p>
        </div>
      </div>
      <BrandFilter />
      <StickeeWidget filter={filter} />
      <Footer />
    </div>
  );
};

export default MobilePhones;