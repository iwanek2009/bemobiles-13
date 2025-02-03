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
      <TheMobile
        title="Sony phone deals."
        description="Experience premium Sony Xperia smartphones with professional-grade cameras and stunning displays."
        heroImage="/lovable-uploads/853d1592-1bf1-4803-a5d2-37a75f347fad.png"
        imageAlt="Three Sony Xperia smartphones showcasing their professional ZEISS camera systems in black, green, and silver colors"
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
    </>
  );
};

export default SonyMobilePhones;