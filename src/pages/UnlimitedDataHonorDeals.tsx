
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataHonorDeals = () => {
  useSEO({
    title: "Unlimited Data Honor Deals | Best Honor Plans",
    description: "Explore unlimited data deals for Honor phones. Compare plans and find your perfect Honor device with unlimited data from top networks."
  });

  return (
    <TheMobile
      title="Unlimited data Honor deals."
      description="Discover Honor phones with unlimited data plans. Great value meets unlimited possibilities."
      heroImage="/lovable-uploads/cfb28801-2b3e-4a7e-b078-d891e464e45d.png"
      imageAlt="Honor phones with unlimited data plans"
      filter={{ brands: [24] }}
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

export default UnlimitedDataHonorDeals;
