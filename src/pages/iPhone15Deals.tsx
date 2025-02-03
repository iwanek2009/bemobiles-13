
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { IPhone15Guide } from "@/components/iphone/iPhone15Guide";
import { Footer } from "@/components/Footer";

const iPhone15Deals = () => {
  useSEO({
    title: "iPhone 15 Deals & Pay Monthly Contracts | Latest Smartphone Offers",
    description: "Discover unbeatable iPhone 15 deals—including Pro and Pro Max offers—with flexible monthly contracts at bemobiles.com. Compare models, enjoy trade-in offers, and upgrade your smartphone experience today!"
  });

  return (
    <div className="min-h-screen flex flex-col">
      <TheMobile
        title="iPhone 15 deals."
        description="Get the latest iPhone 15 on contract with amazing deals from top UK networks."
        heroImage="/lovable-uploads/d94de1cf-1264-41cb-b4c3-c52fa6fee6d6.png"
        imageAlt="iPhone 15 showcasing its sleek design with dual camera system"
        filter={{
          families: [1890],
          upfront_price: {
            min: 0,
            max: 200
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
      <IPhone15Guide />
      <Footer />
    </div>
  );
};

export default iPhone15Deals;
