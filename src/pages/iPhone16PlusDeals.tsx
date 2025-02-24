
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const iPhone16PlusDeals = () => {
  useSEO({
    title: "iPhone 16 Plus Deals & Contracts | Compare Large Screen Plans",
    description: "Explore iPhone 16 Plus with superior screen size and performance. Compare flexible monthly plans, unlimited data packages & exclusive network perks."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('iPhone16PlusDealsReloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('iPhone16PlusDealsReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="iPhone 16 Plus deals."
      description="Apple's Enhanced Large-Screen iPhone with Advanced Display Features, Premium Performance Capabilities, and Exclusive Monthly Plans from Leading Networks."
      heroImage="/lovable-uploads/ff145b21-91f7-427f-8cb4-8ea269192f1b.png"
      imageAlt="iPhone 16 Plus showcasing its larger display"
      filter={{
        families: [1969],
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

export default iPhone16PlusDeals;

