
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel9ProDeals = () => {
  useSEO({
    title: "Google Pixel 9 Pro Deals | Compare Best Offers",
    description: "Find the best Google Pixel 9 Pro deals and contracts. Compare prices, data plans, and network offers to get the perfect Pixel 9 Pro contract for you."
  });

  return (
    <TheMobile
      title="Google Pixel 9 Pro deals."
      description="Experience professional-grade photography with the Pixel 9 Pro's advanced camera system and AI capabilities."
      heroImage="/lovable-uploads/3afea53f-14a6-4462-a63b-9357394e9398.png"
      imageAlt="Google Pixel 9 Pro showcasing its foldable display with vibrant blue and purple colors"
      filter={{
        families: [1965]
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

export default GooglePixel9ProDeals;

