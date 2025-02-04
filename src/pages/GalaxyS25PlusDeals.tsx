
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
      heroImage="/lovable-uploads/5022cc00-a5d8-4c0d-b8ce-a1a650ac5a19.png"
      imageAlt="Samsung Galaxy S25 Plus in blue color showcasing its triple camera system"
      filter={{
        families: [1989]
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
