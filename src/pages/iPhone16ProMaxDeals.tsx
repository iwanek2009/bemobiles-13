
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const iPhone16ProMaxDeals = () => {
  useSEO({
    title: "iPhone 16 Pro Max Deals | Compare Best Offers",
    description: "Find the best iPhone 16 Pro Max deals and contracts. Compare prices, data plans, and network offers to get the perfect iPhone 16 Pro Max contract for you."
  });

  // Add page refresh on every visit
  useEffect(() => {
    window.location.reload();
  }, []);

  return (
    <TheMobile
      title="iPhone 16 Pro Max deals."
      description="Experience the ultimate iPhone with the largest display and most advanced features."
      heroImage="/lovable-uploads/29119fb5-858d-4230-aa74-b9ad183d9fff.png"
      imageAlt="iPhone 16 Pro Max showcasing its premium design"
      filter={{
        families: [1971],
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

export default iPhone16ProMaxDeals;
