
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone14ProDeals = () => {
  useSEO({
    title: "iPhone 14 Pro Deals & Contracts | Compare Premium Plans",
    description: "Explore iPhone 14 Pro with premium features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="iPhone 14 Pro deals."
      description="Experience pro-level features with iPhone 14 Pro on contract from top UK networks."
      heroImage="/lovable-uploads/19301e10-a0cf-46f1-bf0d-6f9970bc8011.png"
      imageAlt="iPhone 14 Pro in Space Black showcasing its premium design and triple camera system"
      filter={{ families: [1802] }}
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

export default iPhone14ProDeals;
