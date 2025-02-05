
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
      heroImage="/lovable-uploads/2309a3ca-7eec-435d-a9d6-f30a38181db1.png"
      imageAlt="iPhone 15 Pro Max in Space Black showcasing its premium design and triple camera system"
      filter={{ families: [1893] }}
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

export default iPhone15ProMaxDeals;
