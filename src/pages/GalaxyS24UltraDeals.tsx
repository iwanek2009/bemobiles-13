
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS24UltraDeals = () => {
  useSEO({
    title: "Samsung Galaxy S24 Ultra Deals & Contracts | Premium AI Plans",
    description: "Experience Samsung's ultimate flagship S24 Ultra with AI features. Compare premium plans, unlimited data packages & exclusive network benefits."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S24 Ultra deals"
      description="Compare and Find Premium S24 Ultra Plans Across Networks - Match Elite Features, Data Packages, and Monthly Benefits."
      heroImage="/lovable-uploads/b9202d63-5e55-4e08-a5b3-920800881108.png"
      imageAlt="Samsung Galaxy S24 Ultra showing premium design with advanced camera system"
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
