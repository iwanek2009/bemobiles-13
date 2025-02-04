
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel9ProFoldDeals = () => {
  useSEO({
    title: "Google Pixel 9 Pro Fold Deals | Compare Best Offers",
    description: "Find the best Google Pixel 9 Pro Fold deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 9 Pro Fold contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 9 Pro Fold deals."
      description="Experience the future of mobile with the Pixel 9 Pro Fold's innovative folding display and advanced features."
      heroImage="/lovable-uploads/bb25369c-a143-48e9-bc03-b67f393192ce.png"
      imageAlt="Google Pixel 9 Pro Fold showcasing its sleek folding display with blue and purple reflections"
      filter={{
        families: [1965],
        upfront_price: {
          min: 0,
          max: 0
        }
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

export default GooglePixel9ProFoldDeals;

