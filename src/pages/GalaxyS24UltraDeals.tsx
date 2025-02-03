import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24UltraDeals = () => {
  useSEO({
    title: "Samsung Galaxy S24 Ultra Deals & Contracts | Compare Best Offers",
    description: "Find the best Samsung Galaxy S24 Ultra deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S24 Ultra contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24 Ultra deals."
      description="Experience the ultimate Galaxy S24 Ultra with S Pen and pro-grade cameras."
      heroImage="/lovable-uploads/c2180d62-3e5e-4cba-a6e4-0ae0544d3d85.png"
      imageAlt="Samsung Galaxy S24 Ultra with its quad camera system"
      filter={{
        families: [1906],
        upfront_price: {
          min: 0,
          max: 0
        }
      }}
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

export default GalaxyS24UltraDeals;