
import { TheMobile } from "@/components/templates/TheMobile";
import { IPhoneContracts } from "@/components/iphone/IPhoneContracts";
import { IPhoneFAQ } from "@/components/iphone/IPhoneFAQ";
import { IPhoneLineup } from "@/components/iphone/IPhoneLineup";
import { IPhoneCarrierDeals } from "@/components/iphone/IPhoneCarrierDeals";
import { IPhoneEcosystem } from "@/components/iphone/IPhoneEcosystem";
import PhoneModelsSection from "@/components/iphone/PhoneModelsSection";
import { useSEO } from "@/hooks/useSEO";

const IPhoneMobilePhones = () => {
  useSEO({
    title: "iPhone Contract Deals: Compare Plans & Get the Best Offers",
    description: "Find unbeatable iPhone contract deals, compare top carriers, and save on your upgrade. Explore flexible plans and secure the best iPhone offer for you now!"
  });

  return (
    <>
      <TheMobile
        title="iPhone phone deals."
        description="Experience innovation with Apple's premium iPhone range, featuring cutting-edge technology and seamless integration with the Apple ecosystem."
        heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
        imageAlt="Latest iPhone 14 Pro showcasing premium design with triple camera system"
        filter={{ brands: [19] }}
        sort="POPULARITY"
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      <IPhoneContracts />
      <IPhoneLineup />
      <PhoneModelsSection />
      <IPhoneCarrierDeals />
      <IPhoneEcosystem />
      <IPhoneFAQ />
    </>
  );
};

export default IPhoneMobilePhones;
