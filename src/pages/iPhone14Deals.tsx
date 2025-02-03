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
      heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
      imageAlt="iPhone 14 showcasing its design and features"
      filter={{ families: [1238] }}
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

export default iPhone14Deals;