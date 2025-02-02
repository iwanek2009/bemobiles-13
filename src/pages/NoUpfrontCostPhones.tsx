import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { NoUpfrontContent } from "@/components/mobile/NoUpfrontContent";
import { ModelVariations } from "@/components/mobile/ModelVariations";
import { LatestFeatures } from "@/components/mobile/LatestFeatures";
import { ContractOptions } from "@/components/mobile/ContractOptions";
import { EcosystemPerks } from "@/components/mobile/EcosystemPerks";
import { NoUpfrontComparisons } from "@/components/mobile/NoUpfrontComparisons";
import { NoUpfrontTips } from "@/components/mobile/NoUpfrontTips";
import { NoUpfrontCTASection } from "@/components/mobile/NoUpfrontCTASection";
import { useSEO } from "@/hooks/useSEO";

const NoUpfrontCostPhones = () => {
  useSEO({
    title: "Mobile Phone Deals With No Upfront Cost – Unbeatable iPhone, Pixel & Galaxy Offers | BeMobiles.com",
    description: "Upgrade your smartphone with zero upfront cost! Discover exclusive deals on iPhone, Pixel, and Galaxy, plus flexible payment plans, and carrier contracts designed for every lifestyle. Explore the latest offers on BeMobiles.com today!"
  });

  return (
    <>
      <Header />
      <TheMobile
        title="No upfront cost phone deals."
        description="Get the latest smartphones with £0 upfront cost. Compare deals from all major UK networks."
        heroImage="/lovable-uploads/db93ae0b-0115-490e-85e2-f244c441730a.png"
        imageAlt="Latest iPhone models showing Pro and regular versions with advanced camera system"
        filter={{ families: [1968, 1969, 1970] }}
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      <NoUpfrontContent />
      <ModelVariations />
      <LatestFeatures />
      <ContractOptions />
      <EcosystemPerks />
      <NoUpfrontComparisons />
      <NoUpfrontTips />
      <NoUpfrontCTASection />
      <Footer />
    </>
  );
};

export default NoUpfrontCostPhones;