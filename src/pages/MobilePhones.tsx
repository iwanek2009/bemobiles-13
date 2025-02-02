import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { useSearchParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { MobileHeroSection } from "@/components/mobile/MobileHeroSection";
import { MobileContractDeals } from "@/components/mobile/MobileContractDeals";
import { MobilePhoneDeals } from "@/components/mobile/MobilePhoneDeals";
import { ModelVariations } from "@/components/mobile/ModelVariations";
import { LatestFeatures } from "@/components/mobile/LatestFeatures";
import { ContractOptions } from "@/components/mobile/ContractOptions";
import { EcosystemPerks } from "@/components/mobile/EcosystemPerks";
import { ComparisonSection } from "@/components/mobile/ComparisonSection";
import { ChoosingTips } from "@/components/mobile/ChoosingTips";
import { MobileCTASection } from "@/components/mobile/MobileCTASection";

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
      <MobileHeroSection />
      <StickeeWidget basic sort="POPULARITY" />

      {/* Content Sections */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="space-y-12">
            <MobileContractDeals />
            <MobilePhoneDeals />
            <ModelVariations />
            <LatestFeatures />
            <ContractOptions />
            <EcosystemPerks />
            <ComparisonSection />
            <ChoosingTips />
            <MobileCTASection />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobilePhones;