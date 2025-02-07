
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel8ProDeals = () => {
  useSEO({
    title: "Google Pixel 8 Pro Deals & Contracts | Compare Premium AI Plans",
    description: "Experience Google Pixel 8 Pro with advanced AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="Google Pixel 8 Pro deals"
      description="Experience pro-level photography with the Pixel 8 Pro's advanced camera system."
      heroImage="/lovable-uploads/853d1592-1bf1-4803-a5d2-37a75f347fad.png"
      imageAlt="Google Pixel 8 Pro showcasing its pro camera system"
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

export default GooglePixel8ProDeals;
