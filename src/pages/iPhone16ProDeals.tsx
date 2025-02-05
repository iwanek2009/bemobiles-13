
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const iPhone16ProDeals = () => {
  useSEO({
    title: "iPhone 16 Pro Deals & Contracts | Compare Premium Plans",
    description: "Explore premium iPhone 16 Pro with flexible monthly contracts. Compare no upfront cost plans, unlimited data bundles & exclusive carrier benefits."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('iPhone16ProDealsReloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('iPhone16ProDealsReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="iPhone 16 Pro deals."
      description="Experience Apple's Ultimate Professional iPhone with Advanced Camera Features, Premium Network Benefits, and Flexible Monthly Payment Plans from Leading Providers."
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
