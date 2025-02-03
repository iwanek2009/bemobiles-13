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
      heroImage="/lovable-uploads/794c7a99-1639-472d-97c3-1ebb220a09b1.png"
      imageAlt="iPhone 13 showing its dual camera system"
      filter={{
        families: [1890],
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

export default iPhone13Deals;