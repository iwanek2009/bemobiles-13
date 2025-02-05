
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone15PlusDeals = () => {
  useSEO({
    title: "iPhone 15 Plus Deals | Compare Best Contract Offers",
    description: "Find the best iPhone 15 Plus contract deals. Compare prices and plans from UK's leading networks with flexible payment options."
  });

  return (
    <TheMobile
      title="iPhone 15 Plus deals."
      description="Experience the larger iPhone 15 Plus on contract with amazing deals from top UK networks."
      heroImage="/lovable-uploads/be7d1c03-10f4-4284-82e1-92b891a5fdf4.png"
      imageAlt="iPhone 15 Plus showcasing its larger display and features"
      filter={{ families: [1891] }}
      sort="UPFRONT_PRICE"
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

export default iPhone15PlusDeals;
