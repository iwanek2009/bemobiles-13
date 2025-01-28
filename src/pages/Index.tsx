import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandFilter } from "@/components/BrandFilter";
import { PhoneDeals } from "@/components/PhoneDeals";
import { InfoSection } from "@/components/InfoSection";
import { CategoryList } from "@/components/CategoryList";
import { GuideSection } from "@/components/GuideSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleFilteredDeals = (filterId: number) => {
    window.location.href = `/mobile-phones?filter=${filterId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
          <Button 
            onClick={() => handleFilteredDeals(1968)}
            className="mb-2 md:mb-8"
          >
            View iPhone Deals
          </Button>
          <Button 
            onClick={() => handleFilteredDeals(1969)}
            className="mb-2 md:mb-8"
            variant="secondary"
          >
            View Samsung Deals
          </Button>
          <Button 
            onClick={() => handleFilteredDeals(1970)}
            className="mb-2 md:mb-8"
            variant="outline"
          >
            View Google Pixel Deals
          </Button>
        </div>
      </div>
      <BrandFilter />
      <PhoneDeals />
      <CategoryList />
      <GuideSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;