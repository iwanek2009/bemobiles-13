import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandFilter } from "@/components/BrandFilter";
import { PhoneDeals } from "@/components/PhoneDeals";
import { InfoSection } from "@/components/InfoSection";
import { CategoryList } from "@/components/CategoryList";
import { GuideSection } from "@/components/GuideSection";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Compare & Save on Phone Contracts | iPhone & Samsung Deals",
    description: "Find the best mobile phone contracts with no upfront cost from £25/month. Compare latest iPhone, Samsung & more. find exclusive offers at bemobiles.com"
  });

  const handleFilteredDeals = (filterId: number) => {
    window.location.href = `/mobile-phones?filter=${filterId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
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