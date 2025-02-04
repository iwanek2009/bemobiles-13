import { TheMobile } from "@/components/templates/TheMobile";
import { GalaxyS25Guide } from "@/components/samsung/GalaxyS25Guide";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const GalaxyS25Deals = () => {
  useSEO({
    title: "Samsung Galaxy S25 Deals & Contracts 2025 | Best Monthly Plans & No Upfront Cost",
    description: "Compare the best Samsung Galaxy S25 deals & monthly contracts. Find no upfront cost plans, trade-in offers & unlimited data bundles. Expert guide with latest prices & features comparison."
  });

  return (
    <>
      <TheMobile
        title="Samsung Galaxy S25 deals."
        description="Experience the next generation of Galaxy with advanced AI features."
        heroImage="/lovable-uploads/2d3483e1-dc43-4c59-9984-88025392790d.png"
        imageAlt="Samsung Galaxy S25 in navy blue color showing triple camera setup and sleek design"
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