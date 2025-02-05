
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone16Deals = () => {
  useSEO({
    title: "iPhone 16 Deals & Contracts | Compare Best Monthly Plans",
    description: "Discover the latest iPhone 16 with flexible monthly contracts. Compare no upfront cost plans, unlimited data options & exclusive network deals."
  });

  return (
    <TheMobile
      title="iPhone 16 deals."
      description="Experience the latest iPhone 16 with advanced features and powerful performance."
      heroImage="/lovable-uploads/23b27686-c064-4ea4-8e77-83147aac4765.png"
      imageAlt="iPhone 16 in Space Black color showing its dual camera system and elegant design"
      filter={{
        families: [1968],
        upfront_price: {
          min: 0,
          max: 0
        }
      }}
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

export default iPhone16Deals;
