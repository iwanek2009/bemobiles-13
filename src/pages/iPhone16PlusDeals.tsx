import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone16PlusDeals = () => {
  useSEO({
    title: "iPhone 16 Plus Deals | Compare Best Offers",
    description: "Find the best iPhone 16 Plus deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 16 Plus contract for you."
  });

  return (
    <TheMobile
      title="iPhone 16 Plus deals."
      description="Experience the larger iPhone 16 Plus with enhanced features and display."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="iPhone 16 Plus showcasing its larger display"
      filter={{
        families: [1969],
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

export default iPhone16PlusDeals;