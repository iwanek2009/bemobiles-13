import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataIPhoneDeals = () => {
  useSEO({
    title: "Unlimited Data iPhone Deals | Best Unlimited Plans",
    description: "Compare unlimited data iPhone deals from UK's top networks. Find the perfect unlimited data plan for your new iPhone with flexible payment options."
  });

  return (
    <TheMobile
      title="Unlimited data iPhone deals."
      description="Get unlimited data on your new iPhone. Stream, browse and share without limits."
      heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
      imageAlt="Latest iPhone models with unlimited data plans"
      filter={{ brands: [19] }}
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

export default UnlimitedDataIPhoneDeals;