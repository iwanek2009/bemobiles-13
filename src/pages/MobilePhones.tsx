import { Header } from "@/components/Header";
import { BrandFilter } from "@/components/BrandFilter";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect Mobile Phone Deal
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Compare the latest smartphones from top brands with flexible payment options and great network coverage.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary text-white hover:bg-primary/90">
                View Latest Deals <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                Compare Plans
              </Button>
            </div>
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