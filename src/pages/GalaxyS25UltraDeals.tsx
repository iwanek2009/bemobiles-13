
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS25UltraDeals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Ultra Deals | Compare Best Offers",
    description: "Find the best Samsung Galaxy S25 Ultra deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S25 Ultra contract for you."
  });

  return (
    <TheMobile
      title="Samsung Galaxy S25 Ultra deals."
      description="Experience ultimate power with the Galaxy S25 Ultra's professional-grade camera system and S Pen functionality."
      heroImage="/lovable-uploads/e1b92cf4-3563-4b8a-b22d-099dd0280be0.png"
      imageAlt="Samsung Galaxy S25 Ultra with S Pen showcasing its premium design and camera system"
      filter={{
        families: [1990]
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

export default GalaxyS25UltraDeals;
