import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS25PlusDeals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Plus Deals | Compare Best Offers",
    description: "Find the best Samsung Galaxy S25 Plus deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S25 Plus contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S25 Plus deals."
      description="Experience premium features with the Galaxy S25 Plus's advanced camera system and powerful performance."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="Samsung Galaxy S25 Plus showcasing its premium features"
      filter={{
        families: [2082],
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

export default GalaxyS25PlusDeals;