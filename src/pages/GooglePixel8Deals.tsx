
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const GooglePixel8Deals = () => {
  useSEO({
    title: "Google Pixel 8 Deals | Smart AI Phone Plans",
    description: "Experience intelligent photography with Pixel 8. Compare flexible monthly plans, unlimited AI features & exclusive network perks."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('pixel8Loaded');
    if (!hasLoaded) {
      sessionStorage.setItem('pixel8Loaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="Google Pixel 8 deals"
      description="Compare and Find the Best Pixel 8 Plans Across Networks - Match Data Packages, Monthly Costs, and Contract Terms"
      heroImage="/lovable-uploads/ea64ddb5-5dbe-4cef-b17b-bc7d55ca55a4.png"
      imageAlt="Google Pixel 8 showing its design"
      filter={{
        families: [1900],
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

export default GooglePixel8Deals;

