
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24Deals = () => {
  useSEO({
    title: "Samsung Galaxy S24 Deals & Contracts | Compare Latest Plans",
    description: "Explore Samsung Galaxy S24 with AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24 deals"
      description="Compare and Find the Best Galaxy S24 Plans Across Networks - Match Data Packages, Monthly Costs, and AI Features."
      heroImage="/lovable-uploads/f9e9cc8d-bd55-49a7-8844-9029a218ee5e.png"
      imageAlt="Samsung Galaxy S24 showcasing its elegant design and triple camera system"
      filter={{
        families: [1904],
      }}
      sort="UPFRONT_PRICE"
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
