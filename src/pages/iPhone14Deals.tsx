
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone14Deals = () => {
  useSEO({
    title: "iPhone 14 Deals | Compare Best Contract Offers",
    description: "Find the best iPhone 14 contract deals. Compare prices and plans from UK's leading networks with flexible payment options."
  });

  return (
    <TheMobile
      title="iPhone 14 deals."
      description="Get the powerful iPhone 14 on contract with great deals from top UK networks."
      heroImage="/lovable-uploads/94a00170-c960-4160-b3c5-35bd980a4c33.png"
      imageAlt="iPhone 14 showcasing its sleek design and dynamic island display"
      filter={{ families: [1800] }}
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

export default iPhone14Deals;
