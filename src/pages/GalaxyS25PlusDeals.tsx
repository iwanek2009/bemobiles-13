
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";

const GalaxyS25PlusDeals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Plus Deals & Contracts | Compare Premium Plans",
    description: "Explore Samsung Galaxy S25 Plus with enhanced features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem('GalaxyS25PlusDealsReloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('GalaxyS25PlusDealsReloaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <TheMobile
      title="Samsung Galaxy S25 Plus deals."
      description="Samsung's Enhanced Premium Smartphone with Advanced Display Technology, Superior Performance Features, and Exclusive Network Benefits from Leading Providers"
      heroImage="/lovable-uploads/5022cc00-a5d8-4c0d-b8ce-a1a650ac5a19.png"
      imageAlt="Samsung Galaxy S25 Plus in blue color showcasing its triple camera system"
      filter={{
        families: [1989]
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

export default GalaxyS25PlusDeals;

