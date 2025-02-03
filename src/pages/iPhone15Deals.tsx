import { TheMobile } from "@/components/templates/TheMobile";
import { IPhone15Guide } from "@/components/iphone/sections/iPhone15Guide";
import { useSEO } from "@/hooks/useSEO";

const iPhone15Deals = () => {
  useSEO({
    title: "iPhone 15 Deals & Contracts | Compare Latest Offers",
    description: "Find the best iPhone 15 deals and pay monthly contracts. Compare prices across all models including iPhone 15, Plus, Pro and Pro Max. Expert buying guide included!"
  });

  return (
    <>
      <TheMobile
        title="iPhone 15 deals."
        description="Get the latest iPhone 15 on contract with amazing deals from top UK networks."
        heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
        imageAlt="iPhone 15 showing its stunning design and features"
        filter={{ families: [1234] }}
        sort="POPULARITY"
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      <IPhone15Guide />
    </>
  );
};

export default iPhone15Deals;