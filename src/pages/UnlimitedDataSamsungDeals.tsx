
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataSamsungDeals = () => {
  useSEO({
    title: "Unlimited Data Samsung Deals | Compare Galaxy Phone Plans",
    description: "Discover unlimited data plans for Samsung phones. Compare network speeds, monthly contracts & exclusive Galaxy features across carriers."
  });

  return (
    <TheMobile
      title="Unlimited data Samsung deals."
      description="Compare and Find Unlimited Data Samsung Plans Across all UK Networks - Match Galaxy Models, Monthly Costs, and Network Coverage."
      heroImage="/lovable-uploads/7957768e-94f3-4f05-b4fc-1c67cb7ddeab.png"
      imageAlt="Samsung Galaxy phones with unlimited data plans"
      filter={{ brands: [5] }}
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

export default UnlimitedDataSamsungDeals;
