
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const GooglePixel8ProDeals = () => {
  useSEO({
    title: "Google Pixel 8 Pro Deals & Contracts | Compare Premium AI Plans",
    description: "Experience Google Pixel 8 Pro with advanced AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  // Add page refresh on every visit
  useEffect(() => {
    window.location.reload();
  }, []);

  return (
    <TheMobile
      title="Google Pixel 8 Pro deals"
      description="Explore Monthly Plans Deals for Pixel 8 Pro with AI-Enhanced Features, Unlimited Cloud Storage, and Premium Network Benefits."
      heroImage="/lovable-uploads/0e5d689a-5b7f-4929-bcae-ceb1e4b47cc2.png"
      imageAlt="Google Pixel 8 Pro showcasing its pro camera system"
      filter={{
        families: [1901],
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

export default GooglePixel8ProDeals;
