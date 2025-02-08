
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24PlusDeals = () => {
  useSEO({
    title: "Samsung Galaxy S24+ Deals & Contracts | Compare Premium Plans",
    description: "Explore Samsung Galaxy S24+ with enhanced AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24+ deals"
      description="Compare and Find Premium S24+ Plans Across Networks - Match Enhanced Features, Data Allowances, and Monthly Costs."
      heroImage="/lovable-uploads/72d63d99-0c78-40c3-9541-92b78be41f31.png"
      imageAlt="Samsung Galaxy S24+ showcasing its premium design with triple camera system"
      filter={{
        families: [1905],
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
