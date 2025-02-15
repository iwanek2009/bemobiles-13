
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { Footer } from "@/components/Footer";
import SouthamptonIntroSection from "@/components/sections/SouthamptonIntroSection";
import FeaturedPhonesPreview from "@/components/sections/FeaturedPhonesPreview";
import ContractTypesSection from "@/components/sections/ContractTypesSection";
import FAQSection from "@/components/sections/FAQSection";

const BestMobilePhoneDealsSouthampton = () => {
  useSEO({
    title: "Best Mobile Phone Deals in Southampton | Compare Local Offers",
    description: "Find the best mobile phone deals in Southampton. Compare local contracts, plans & exclusive offers from major networks. Save on your next phone contract!"
  });

  return (
    <>
      <TheMobile
        title="Best Mobile Phone Deals in Southampton"
        description="Compare the latest phone contracts and exclusive deals available in Southampton. Find great value plans from all major networks with flexible monthly payments and data options."
        heroImage="/lovable-uploads/7957768e-94f3-4f05-b4fc-1c67cb7ddeab.png"
        imageAlt="Latest smartphones available in Southampton"
        filter={{
          upfront_price: {
            min: 0,
            max: 0
          }
        }}
        sort="POPULARITY"
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <SouthamptonIntroSection />
          </div>
          <div className="mb-8">
            <FeaturedPhonesPreview />
          </div>
          <div className="mb-8">
            <ContractTypesSection />
          </div>
          <div className="mb-8">
            <FAQSection />
          </div>
        </div>
      </TheMobile>
      <Footer />
    </>
  );
};

export default BestMobilePhoneDealsSouthampton;
