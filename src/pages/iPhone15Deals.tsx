import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { IPhone15Guide } from "@/components/iphone/iPhone15Guide";
import { Footer } from "@/components/Footer";

const iPhone15Deals = () => {
  useSEO({
    title: "iPhone 15 Deals | Compare Best Contract Offers",
    description: "Find the best iPhone 15 contract deals. Compare prices and plans from UK's leading networks with flexible payment options."
  });

  return (
    <div className="min-h-screen flex flex-col">
      <TheMobile
        title="iPhone 15 deals."
        description="Get the latest iPhone 15 on contract with amazing deals from top UK networks."
        heroImage="/lovable-uploads/2cfcbfd3-2aa7-4cd3-b90b-7c501499fb1e.png"
        imageAlt="iPhone 15 showing its stunning design and features"
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