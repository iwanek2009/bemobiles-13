
import { TheMobile } from "@/components/templates/TheMobile";
import { GalaxyS25Guide } from "@/components/samsung/GalaxyS25Guide";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS25Deals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Deals & Contracts | Compare Latest Plans",
    description: "Discover Samsung Galaxy S25 with powerful performance. Compare flexible monthly plans, unlimited data packages & exclusive network perks."
  });

  return (
    <>
      <TheMobile
        title="Samsung Galaxy S25 deals."
        description="Samsung's Latest Flagship Smartphone with Innovative Features, see Exclusive Network Benefits from Leading Providers."
        heroImage="/lovable-uploads/2d3483e1-dc43-4c59-9984-88025392790d.png"
        imageAlt="Samsung Galaxy S25 in navy blue color showing triple camera setup and sleek design"
        filter={{
          families: [1988]
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
