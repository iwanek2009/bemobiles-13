
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { PixelSpecsTable } from "@/components/google/sections/PixelSpecsTable";

const GooglePixel9ProDeals = () => {
  useSEO({
    title: "Google Pixel 9 Pro Deals & Contracts | Compare Premium AI Plans",
    description: "Experience Google Pixel 9 Pro with advanced AI and premium features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <>
      <TheMobile
        title="Google Pixel 9 Pro deals."
        description="Experience professional-grade photography with the Pixel 9 Pro's advanced camera system and AI capabilities."
        heroImage="/lovable-uploads/17ec08fc-d0ba-43af-8dff-35b4d32b1822.png"
        imageAlt="Google Pixel 9 Pro in black color showcasing its advanced dual camera system and stunning display"
        filter={{
          families: [1963]
        }}
        sort="UPFRONT_PRICE"
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      <PixelSpecsTable />
    </>
  );
};

export default GooglePixel9ProDeals;
