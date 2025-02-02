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
    title: "No Upfront Cost Phone Deals | £0 Deposit Mobile Contracts",
    description: "Get the latest mobile phones with no upfront cost. Compare £0 deposit phone contracts from leading UK networks. Find your perfect deal today!"
  });

  return (
    <>
      <Header />
      <TheMobile
        title="No upfront cost phone deals."
        description="Get the latest smartphones with £0 upfront cost. Compare deals from all major UK networks."
        heroImage="/lovable-uploads/836ea50b-7a40-4377-b225-2c59bacd6058.png"
        imageAlt="Latest smartphones available with no upfront cost deals"
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