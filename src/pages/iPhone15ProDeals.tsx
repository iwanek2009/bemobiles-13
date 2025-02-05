
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone15ProDeals = () => {
  useSEO({
    title: "iPhone 15 Pro Deals & Contracts | Compare Premium Plans",
    description: "Experience premium iPhone 15 Pro with flexible monthly contracts. Compare no upfront cost plans, unlimited data bundles & exclusive carrier benefits."
  });

  return (
    <TheMobile
      title="iPhone 15 Pro deals."
      description="Discover Premium Monthly Plans for iPhone 15 Pro with Unlimited Data Options, Network Perks, and Exclusive Provider Benefits"
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

