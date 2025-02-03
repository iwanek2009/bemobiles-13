import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone15ProMaxDeals = () => {
  useSEO({
    title: "iPhone 15 Pro Max Deals | Compare Best Contract Offers",
    description: "Find the best iPhone 15 Pro Max contract deals. Compare prices and plans from UK's leading networks with flexible payment options."
  });

  return (
    <TheMobile
      title="iPhone 15 Pro Max deals."
      description="Experience the ultimate iPhone with Pro Max features on contract from top UK networks."
      heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
      imageAlt="iPhone 15 Pro Max showcasing its premium design and features"
      filter={{ families: [1237] }}
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

export default iPhone15ProMaxDeals;