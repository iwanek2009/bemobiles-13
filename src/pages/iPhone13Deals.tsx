
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone13Deals = () => {
  useSEO({
    title: "iPhone 13 Deals & Contracts | Compare Value Plans",
    description: "Find great value iPhone 13 plans. Compare affordable monthly contracts, unlimited data packages & exclusive network perks."
  });

  return (
    <TheMobile
      title="iPhone 13 deals"
      description="Compare and Find Affordable iPhone 13 Plans Across All UK Networks - Match Data Allowances, Monthly Prices, and Contract Benefits."
      heroImage="/lovable-uploads/972a0053-51e4-4624-9827-50ad8e23c159.png"
      imageAlt="iPhone 13 in Midnight Black showing its dual camera system and sleek design"
      filter={{
        families: [1708],
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

export default iPhone13Deals;
