import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { SamsungHowToCompare } from "@/components/samsung/SamsungHowToCompare";
import { SamsungChoosingGuide } from "@/components/samsung/SamsungChoosingGuide";
import { SamsungFAQ } from "@/components/samsung/SamsungFAQ";
import { SamsungConsiderations } from "@/components/samsung/SamsungConsiderations";
import { SamsungCoverageChecker } from "@/components/samsung/SamsungCoverageChecker";
import { SamsungGuide } from "@/components/samsung/SamsungGuide";

const SamsungMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Samsung Mobile Phone Deals: Compare & Save on the Best Plans"
        description="Find the best Samsung monthly plans and exclusive offers. Compare data packages, save on upfront costs, and enjoy fast, reliable mobile service today!"
        heroImage="/lovable-uploads/7957768e-94f3-4f05-b4fc-1c67cb7ddeab.png"
        imageAlt="Samsung Galaxy S23 smartphone in blue color"
        filter={{ brands: [5] }}
      />
      
      <SamsungHowToCompare />
      <SamsungChoosingGuide />
      <SamsungFAQ />
      <SamsungConsiderations />
      <SamsungCoverageChecker />
      <SamsungGuide />
      
      <Footer />
    </>
  );
};

export default SamsungMobilePhones;