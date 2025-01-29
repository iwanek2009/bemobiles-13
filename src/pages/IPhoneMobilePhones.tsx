import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
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
        heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
        imageAlt="Latest iPhone models showcasing premium features"
        filter={{ brands: [19] }}
      />
      <Footer />
    </>
  );
};

export default IPhoneMobilePhones;