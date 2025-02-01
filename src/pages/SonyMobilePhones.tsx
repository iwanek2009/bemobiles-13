import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { SonyIntroduction } from "@/components/sony/sections/SonyIntroduction";
import { SonyWelcome } from "@/components/sony/sections/SonyWelcome";
import { SonyXperiaModels } from "@/components/sony/sections/SonyXperiaModels";
import { SonyContracts } from "@/components/sony/sections/SonyContracts";
import { SonyEcosystem } from "@/components/sony/sections/SonyEcosystem";
import { SonyComparison } from "@/components/sony/sections/SonyComparison";
import { SonyChoosingTips } from "@/components/sony/sections/SonyChoosingTips";
import { SonyCTA } from "@/components/sony/sections/SonyCTA";

const SonyMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Sony phone deals."
        description="Experience premium Sony Xperia smartphones with professional-grade cameras and stunning displays."
        heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
        imageAlt="Sony Xperia smartphone showcasing professional camera features"
        filter={{ brands: [54] }}
      />
      
      <div className="container mx-auto px-4 py-12 max-w-[800px]">
        <div className="space-y-8">
          <SonyIntroduction />
          <SonyWelcome />
          <SonyXperiaModels />
          <SonyContracts />
          <SonyEcosystem />
          <SonyComparison />
          <SonyChoosingTips />
          <SonyCTA />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SonyMobilePhones;