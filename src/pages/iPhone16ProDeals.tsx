
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const iPhone16ProDeals = () => {
  useSEO({
    title: "iPhone 16 Pro Deals | Compare Best Offers",
    description: "Find the best iPhone 16 Pro deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 16 Pro contract for you."
  });

  // Add page refresh on every visit
  useEffect(() => {
    window.location.reload();
  }, []);

  return (
    <TheMobile
      title="iPhone 16 Pro deals."
      description="Experience pro-level features with the iPhone 16 Pro's advanced camera system."
      heroImage="/lovable-uploads/3fd20b7f-c7e4-4654-affb-b7a87c42957f.png"
      imageAlt="iPhone 16 Pro showcasing its pro camera system"
      filter={{
        families: [1970],
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

export default iPhone16ProDeals;
