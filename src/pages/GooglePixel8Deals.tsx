import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel8Deals = () => {
  useSEO({
    title: "Google Pixel 8 Deals & Contracts | Compare Best Offers",
    description: "Find the best Google Pixel 8 deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 8 contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 8 deals."
      description="Discover the Google Pixel 8 with its advanced AI features and amazing camera."
      heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
      imageAlt="Google Pixel 8 showcasing its design"
      filter={{
        families: [1892],
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

export default GooglePixel8Deals;