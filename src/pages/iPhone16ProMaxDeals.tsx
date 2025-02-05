
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const iPhone16ProMaxDeals = () => {
  useSEO({
    title: "iPhone 16 Pro Max Deals & Contracts | Premium Flagship Plans",
    description: "Discover premium iPhone 16 Pro Max with maximum performance. Compare exclusive plans, unlimited data packages & premium network benefits."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('iPhone16ProMaxDealsReloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('iPhone16ProMaxDealsReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="iPhone 16 Pro Max deals."
      description="Experience Apple's Largest Professional iPhone with Revolutionary Camera System, and Exclusive Network Benefits from Leading Mobile Providers"
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

