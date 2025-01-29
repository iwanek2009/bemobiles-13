import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";

const SonyMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Sony phone deals."
        description="Professional-grade smartphones with superior display and camera technology, perfect for content creators."
        heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
        imageAlt="Sony Xperia smartphone showcasing professional camera features"
        filter={{ brands: [54] }}
      />
      <Footer />
    </>
  );
};

export default SonyMobilePhones;