
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel9Deals = () => {
  useSEO({
    title: "Google Pixel 9 Deals & Contracts | Compare Latest AI Phone Plans",
    description: "Explore Google Pixel 9 with advanced AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="Google Pixel 9 deals."
      description="Experience pure Android with the Pixel 9's advanced AI features and exceptional camera capabilities."
      heroImage="/lovable-uploads/94bb906a-3db5-4342-95fe-4dd94cdf917b.png"
      imageAlt="Google Pixel 9 in black color featuring its dual camera system and beautiful display"
      filter={{
        families: [1962]
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
  );
};

export default GooglePixel9Deals;

