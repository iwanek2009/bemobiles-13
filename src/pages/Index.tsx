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
        <Button 
          onClick={() => handleFilteredDeals(1970)}
          className="mb-8"
          variant="outline"
        >
          View Google Pixel Deals
        </Button>
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