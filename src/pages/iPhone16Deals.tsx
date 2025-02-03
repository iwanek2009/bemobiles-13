import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone16Deals = () => {
  useSEO({
    title: "iPhone 16 Deals | Compare Best Offers",
    description: "Find the best iPhone 16 deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 16 contract for you."
  });

  return (
    <TheMobile
      title="iPhone 16 deals."
      description="Experience the latest iPhone 16 with advanced features and powerful performance."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="iPhone 16 showcasing its design"
      filter={{
        families: [1968],
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

export default iPhone16Deals;