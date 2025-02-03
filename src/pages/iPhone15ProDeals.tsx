import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone15ProDeals = () => {
  useSEO({
    title: "iPhone 15 Pro Deals | Compare Best Contract Offers",
    description: "Find the best iPhone 15 Pro contract deals. Compare prices and plans from UK's leading networks with flexible payment options."
  });

  return (
    <TheMobile
      title="iPhone 15 Pro deals."
      description="Experience pro-grade features with iPhone 15 Pro on contract from top UK networks."
      heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
      imageAlt="iPhone 15 Pro showcasing its premium design and features"
      filter={{ families: [1236] }}
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

export default iPhone15ProDeals;