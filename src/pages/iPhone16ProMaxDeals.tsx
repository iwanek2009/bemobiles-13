import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone16ProMaxDeals = () => {
  useSEO({
    title: "iPhone 16 Pro Max Deals | Compare Best Offers",
    description: "Find the best iPhone 16 Pro Max deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 16 Pro Max contract for you."
  });

  return (
    <TheMobile
      title="iPhone 16 Pro Max deals."
      description="Experience the ultimate iPhone with the largest display and most advanced features."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="iPhone 16 Pro Max showcasing its premium design"
      filter={{
        families: [1971],
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

export default iPhone16ProMaxDeals;