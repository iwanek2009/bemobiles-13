
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const iPhone15PlusDeals = () => {
  useSEO({
    title: "iPhone 15 Plus Deals & Contracts | Compare Large Screen iPhone Plans",
    description: "Explore iPhone 15 Plus with superior screen size and performance. Compare flexible monthly plans, unlimited data packages & exclusive network perks."
  });

  return (
    <TheMobile
      title="iPhone 15 Plus deals."
      description="Find Unbeatable Monthly Plans for iPhone 15 Plus with Zero Upfront Cost Options, Unlimited Data Packages, and Exclusive Network Benefits."
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

