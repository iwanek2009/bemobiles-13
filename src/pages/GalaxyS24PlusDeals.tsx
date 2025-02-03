import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24PlusDeals = () => {
  useSEO({
    title: "Samsung Galaxy S24+ Deals | Compare Best Offers",
    description: "Find the best Samsung Galaxy S24+ deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S24+ contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24+ deals."
      description="Get the enhanced Galaxy S24+ with larger display and premium features."
      heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
      imageAlt="Samsung Galaxy S24+ showcasing its premium design"
      filter={{
        families: [2091],
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

export default GalaxyS24PlusDeals;