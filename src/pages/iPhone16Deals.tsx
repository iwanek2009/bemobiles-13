
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone16Deals = () => {
  useSEO({
    title: "iPhone 16 Deals | Compare Best Monthly Plans",
    description: "Discover the latest iPhone 16 with flexible monthly contracts. Compare no upfront cost plans, unlimited data options & exclusive network deals."
  });

  return (
    <TheMobile
      title="iPhone 16 deals."
      description="Apple's Most Advanced iPhone with Premium Network Benefits, Unlimited Data Options, and Flexible Monthly Payment Solutions from UK Leading Providers."
      heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
      imageAlt="iPhone 16 showcasing its design"
      filter={{
        families: [1968],
        upfront_price: {
          min: 0,
          max: 0
        }
      }}
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

export default iPhone16Deals;
