
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel9Deals = () => {
  useSEO({
    title: "Google Pixel 9 Deals | Compare Best Offers",
    description: "Find the best Google Pixel 9 deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 9 contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 9 deals."
      description="Experience pure Android with the Pixel 9's advanced AI features and exceptional camera capabilities."
      heroImage="/lovable-uploads/94bb906a-3db5-4342-95fe-4dd94cdf917b.png"
      imageAlt="Google Pixel 9 in black color featuring its dual camera system and beautiful display"
      filter={{
        families: [2084],
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

export default GooglePixel9Deals;
