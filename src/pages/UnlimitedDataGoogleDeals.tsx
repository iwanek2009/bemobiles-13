
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const UnlimitedDataGoogleDeals = () => {
  useSEO({
    title: "Unlimited Data Google Pixel Deals | Compare Pixel Phone Plans",
    description: "Find unlimited data plans for Google Pixel phones. Compare network speeds, monthly plans & exclusive Pixel features across carriers."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('unlimitedGoogleLoaded');
    if (!hasLoaded) {
      sessionStorage.setItem('unlimitedGoogleLoaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="Unlimited data Google Pixel deals."
      description="Compare and Find Unlimited Data Pixel Plans Across Networks - Match Phone Models, Monthly Costs, and Network Coverage."
      heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
      imageAlt="Google Pixel phones with unlimited data plans"
      filter={{ brands: [15] }}
      sort="DATA"
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

export default UnlimitedDataGoogleDeals;
