import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { IPhoneIntro } from "@/components/iphone/sections/IPhoneIntro";
import { IPhoneComparison } from "@/components/iphone/sections/IPhoneComparison";
import { IPhoneBudget } from "@/components/iphone/sections/IPhoneBudget";
import { IPhoneGuide } from "@/components/iphone/sections/IPhoneGuide";
import { IPhoneFAQ } from "@/components/iphone/IPhoneFAQ";
import { useSEO } from "@/hooks/useSEO";

const IPhoneMobilePhones = () => {
  useSEO({
    title: "iPhone Mobile Phone Deals: Latest Models & Best Offers",
    description: "Compare the best iPhone deals and contracts from UK's leading networks. Find amazing offers on the latest iPhone models with flexible payment options."
  });

  return (
    <>
      <Header />
      <TheMobile
        title="iPhone phone deals."
        description="Experience innovation with Apple's premium iPhone range, featuring cutting-edge technology and seamless integration with the Apple ecosystem."
        heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
        imageAlt="Latest iPhone 14 Pro showcasing premium design with triple camera system"
        filter={{ brands: [19] }}
      />
      <IPhoneIntro />
      <IPhoneComparison />
      <IPhoneBudget />
      <IPhoneGuide />
      <IPhoneFAQ />
      <Footer />
    </>
  );
};

export default IPhoneMobilePhones;