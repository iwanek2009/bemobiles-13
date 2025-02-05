
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone14Deals = () => {
  useSEO({
    title: "iPhone 14 Deals & Contracts | Compare Affordable Plans",
    description: "Get iPhone 14 with flexible monthly plans. Compare no upfront cost contracts, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="iPhone 14 deals."
      description="Get the powerful iPhone 14 on contract with great deals from top UK networks."
      heroImage="/lovable-uploads/6bfd71a6-6f64-439f-a3dd-b75fd167a7a7.png"
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
