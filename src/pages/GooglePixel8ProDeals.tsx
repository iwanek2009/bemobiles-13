
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const GooglePixel8ProDeals = () => {
  useSEO({
    title: "Google Pixel 8 Pro Deals & Contracts | Compare Premium AI Plans",
    description: "Experience Google Pixel 8 Pro with advanced AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('pixel8ProLoaded');
    if (!hasLoaded) {
      sessionStorage.setItem('pixel8ProLoaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="Google Pixel 8 Pro deals"
      description="Explore Monthly Plans Deals for Pixel 8 Pro with AI-Enhanced Features, Unlimited Cloud Storage, and Premium Network Benefits."
      heroImage="/lovable-uploads/c81b964f-826e-4472-a041-be3f38db9484.png"
      imageAlt="Google Pixel 8 Pro in obsidian black showcasing its sleek design"
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
