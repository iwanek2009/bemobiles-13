import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS25Deals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Deals | Compare Best Offers",
    description: "Find the best Samsung Galaxy S25 deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S25 contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S25 deals."
      description="Experience the next generation of Galaxy with advanced AI features."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="Samsung Galaxy S25 showcasing its premium design"
      filter={{
        families: [2093],
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

export default GalaxyS25Deals;