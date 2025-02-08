
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone13Deals = () => {
  useSEO({
    title: "iPhone 13 Deals & Contracts | Compare Best Offers",
    description: "Find the best iPhone 13 deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 13 contract for you."
  });

  return (
    <TheMobile
      title="iPhone 13 deals"
      description="Get the powerful iPhone 13 with stunning camera and 5G capabilities."
      heroImage="/lovable-uploads/6e2a1107-e179-4a8e-bcba-063a55e941b4.png"
      imageAlt="iPhone 13 in Midnight Black showing its dual camera system"
      filter={{
        families: [1708],
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

export default iPhone13Deals;
