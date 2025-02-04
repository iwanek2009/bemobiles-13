import { TheMobile } from "@/components/templates/TheMobile";
import { GalaxyS25Guide } from "@/components/samsung/GalaxyS25Guide";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS25Deals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Deals | Compare Best Offers",
    description: "Find the best Samsung Galaxy S25 deals and contracts. Compare prices, data plans, and network offers to get the perfect Galaxy S25 contract for you."
  });

  return (
    <>
      <TheMobile
        title="Samsung Galaxy S25 deals."
        description="Experience the next generation of Galaxy with advanced AI features."
        heroImage="/lovable-uploads/3ec50571-b797-4cea-9b46-e921cc20eab7.png"
        imageAlt="Samsung Galaxy S25 in light blue color showing triple camera setup"
        filter={{
          families: [1904]
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
      <GalaxyS25Guide />
      <Footer />
    </>
  );
};

export default GalaxyS25Deals;