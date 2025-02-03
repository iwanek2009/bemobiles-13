import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataGoogleDeals = () => {
  useSEO({
    title: "Unlimited Data Google Pixel Deals | Best Pixel Plans",
    description: "Compare unlimited data deals for Google Pixel phones. Find the perfect unlimited plan for your new Pixel from top UK networks."
  });

  return (
    <TheMobile
      title="Unlimited data Google Pixel deals."
      description="Get unlimited data with your Google Pixel. Perfect for the full Google experience."
      heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
      imageAlt="Google Pixel phones with unlimited data plans"
      filter={{ brands: [23] }}
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

export default UnlimitedDataGoogleDeals;