
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone15ProMaxDeals = () => {
  useSEO({
    title: "iPhone 15 Pro Max Deals & Contracts | Premium iPhone Plans",
    description: "Discover premium iPhone 15 Pro Max with maximum performance. Compare exclusive plans, unlimited data packages & premium network benefits."
  });

  return (
    <TheMobile
      title="iPhone 15 Pro Max deals."
      description="Find Premium Monthly Plans for iPhone 15 Pro Max with Unlimited Data Options, Network Perks, and Exclusive Provider Packages"
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
