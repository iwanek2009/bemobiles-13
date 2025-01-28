import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandFilter } from "@/components/BrandFilter";
import { PhoneDeals } from "@/components/PhoneDeals";
import { InfoSection } from "@/components/InfoSection";
import { CategoryList } from "@/components/CategoryList";
import { GuideSection } from "@/components/GuideSection";
import { Footer } from "@/components/Footer";

const Index = () => {
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