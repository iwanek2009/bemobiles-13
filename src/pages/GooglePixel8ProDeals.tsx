import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel8ProDeals = () => {
  useSEO({
    title: "Google Pixel 8 Pro Deals & Contracts | Compare Best Offers",
    description: "Find the best Google Pixel 8 Pro deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 8 Pro contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 8 Pro deals."
      description="Experience the ultimate Pixel with pro-grade cameras and AI features."
      heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
      imageAlt="Google Pixel 8 Pro showing its premium features"
      filter={{
        families: [1893],
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

export default GooglePixel8ProDeals;