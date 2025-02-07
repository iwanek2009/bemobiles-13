
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GooglePixel8Deals = () => {
  useSEO({
    title: "Google Pixel 8 Deals | Smart AI Phone Plans",
    description: "Experience intelligent photography with Pixel 8. Compare flexible monthly plans, unlimited AI features & exclusive network perks."
  });

  return (
    <TheMobile
      title="Google Pixel 8 deals"
      description="Experience the magic of Pixel 8 with advanced AI features and amazing camera."
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
