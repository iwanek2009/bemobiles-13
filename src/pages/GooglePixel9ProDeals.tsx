import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel9ProDeals = () => {
  useSEO({
    title: "Google Pixel 9 Pro Deals | Compare Best Offers",
    description: "Find the best Google Pixel 9 Pro deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 9 Pro contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 9 Pro deals."
      description="Experience professional-grade photography with the Pixel 9 Pro's advanced camera system and AI capabilities."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="Google Pixel 9 Pro showcasing its pro camera system"
      filter={{
        families: [2085],
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
    />
  );
};

export default GooglePixel9ProDeals;