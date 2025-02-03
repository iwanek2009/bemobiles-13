import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone16ProDeals = () => {
  useSEO({
    title: "iPhone 16 Pro Deals | Compare Best Offers",
    description: "Find the best iPhone 16 Pro deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 16 Pro contract for you."
  });

  return (
    <TheMobile
      title="iPhone 16 Pro deals."
      description="Experience pro-level features with the iPhone 16 Pro's advanced camera system."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="iPhone 16 Pro showcasing its pro camera system"
      filter={{
        families: [1970],
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

export default iPhone16ProDeals;