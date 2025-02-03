import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24Deals = () => {
  useSEO({
    title: "Samsung Galaxy S24 Deals & Contracts | Compare Best Offers",
    description: "Find the best Samsung Galaxy S24 deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S24 contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24 deals."
      description="Experience the next-gen Galaxy S24 with AI features and powerful performance."
      heroImage="/lovable-uploads/6e83658a-1c9c-47f5-80f2-39e4627e3cb1.png"
      imageAlt="Samsung Galaxy S24 showcasing its premium design"
      filter={{
        families: [1904],
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

export default GalaxyS24Deals;