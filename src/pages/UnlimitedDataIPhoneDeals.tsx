
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataIPhoneDeals = () => {
  useSEO({
    title: "Unlimited Data iPhone Deals | Compare Unlimited Phone Plans",
    description: "Find unlimited data plans for Apple iPhones. Compare network speeds, monthly contracts & exclusive features across leading carriers."
  });

  return (
    <TheMobile
      title="Unlimited data iPhone deals."
      description="Compare and Find Unlimited Data iPhone Plans Across Networks - Match Apple Models, Monthly Costs, and Network Coverage."
      heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
      imageAlt="Latest iPhone models with unlimited data plans"
      filter={{ brands: [19] }}
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

export default UnlimitedDataIPhoneDeals;
