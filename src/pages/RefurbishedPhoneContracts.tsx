import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const RefurbishedPhoneContracts = () => {
  useSEO({
    title: "Refurbished Phone Contracts | Best Deals on Certified Phones",
    description: "Save money with refurbished phone contracts. Compare deals on certified pre-owned phones from all major brands with warranty and flexible payment options."
  });

  return (
    <TheMobile
      title="Refurbished phone contracts."
      description="Get great deals on certified refurbished phones. Same quality, better value."
      heroImage="/lovable-uploads/df83f3e3-20c0-4ec8-86d9-4bdde97b863d.png"
      imageAlt="Selection of refurbished smartphones"
      basic={true}
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

export default RefurbishedPhoneContracts;