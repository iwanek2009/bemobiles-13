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
import { useSEO } from "@/hooks/useSEO";

const SonyMobilePhones = () => {
  useSEO({
    title: "Sony Mobile Phone Contract Deals UK | Best Sony Xperia Offers & Plans",
    description: "Discover unbeatable Sony mobile phone contract deals in the UK. Explore the latest Sony Xperia offers, exclusive trade-in deals, and flexible payment plans to upgrade your smartphone experience today!"
  });

  return (
    <>
      <Header />
      <TheMobile
        title="Sony phone deals."
        description="Experience premium Sony Xperia smartphones with professional-grade cameras and stunning displays."
        heroImage="/lovable-uploads/3b3308dc-fdc1-4c2e-8738-1ffd646e9c67.png"
        imageAlt="Three Sony Xperia smartphones showcasing their professional camera systems"
        filter={{ brands: [54] }}
        imageProps={{
          loading: "eager",
          fetchPriority: "high"
        }}
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