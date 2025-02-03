import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const UnlimitedDataSamsungDeals = () => {
  useSEO({
    title: "Unlimited Data Samsung Deals | Best Samsung Plans",
    description: "Find the best unlimited data deals for Samsung phones. Compare plans from leading networks and get your perfect Samsung device with unlimited data."
  });

  return (
    <TheMobile
      title="Unlimited data Samsung deals."
      description="Experience Samsung with unlimited data. Perfect for streaming, gaming and more."
      heroImage="/lovable-uploads/7957768e-94f3-4f05-b4fc-1c67cb7ddeab.png"
      imageAlt="Samsung Galaxy phones with unlimited data plans"
      filter={{ brands: [5] }}
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

export default UnlimitedDataSamsungDeals;