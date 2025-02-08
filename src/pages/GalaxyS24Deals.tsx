
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24Deals = () => {
  useSEO({
    title: "Samsung Galaxy S24 Deals | Compare Best Offers",
    description: "Find the best Samsung Galaxy S24 deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S24 contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24 deals"
      description="Experience the latest Galaxy S24 with advanced AI features and powerful performance."
      heroImage="/lovable-uploads/ea3347f8-0911-4f5f-9bcf-5c6d43d61908.png"
      imageAlt="Samsung Galaxy S24 showcasing its design"
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
