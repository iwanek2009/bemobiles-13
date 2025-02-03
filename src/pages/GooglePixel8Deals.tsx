import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel8Deals = () => {
  useSEO({
    title: "Google Pixel 8 Deals | Compare Best Offers",
    description: "Find the best Google Pixel 8 deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 8 contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 8 deals"
      description="Experience the magic of Pixel 8 with advanced AI features and amazing camera."
      heroImage="/lovable-uploads/836ea50b-7a40-4377-b225-2c59bacd6058.png"
      imageAlt="Google Pixel 8 showing its design"
      filter={{
        families: [2080],
        upfront_price: {
          min: 0,
          max: 200
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