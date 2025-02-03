import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataSonyDeals = () => {
  useSEO({
    title: "Unlimited Data Sony Xperia Deals | Best Sony Plans",
    description: "Find the best unlimited data deals for Sony Xperia phones. Compare unlimited plans from leading networks for your new Sony device."
  });

  return (
    <TheMobile
      title="Unlimited data Sony deals."
      description="Get unlimited data with your Sony Xperia. Perfect for entertainment and creativity."
      heroImage="/lovable-uploads/853d1592-1bf1-4803-a5d2-37a75f347fad.png"
      imageAlt="Sony Xperia phones with unlimited data plans"
      filter={{ brands: [54] }}
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

export default UnlimitedDataSonyDeals;