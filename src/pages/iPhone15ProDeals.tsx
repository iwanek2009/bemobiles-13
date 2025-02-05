
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
      heroImage="/lovable-uploads/841c1985-3bfc-46da-a318-829a0136c9fc.png"
      imageAlt="iPhone 15 Pro in Space Black finish showcasing its premium design"
      filter={{ families: [1892] }}
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

export default iPhone15ProDeals;
