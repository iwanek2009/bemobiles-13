
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const RefurbishedPhoneContracts = () => {
  useSEO({
    title: "Refurbished Phone Contracts | Compare Best Value Plans",
    description: "Save on refurbished smartphone contracts. Compare certified used phones, affordable monthly plans & network benefits across leading brands"
  });

  return (
    <TheMobile
      title="Refurbished phone contracts."
      description="Compare and Save on Quality Refurbished Phone Contracts - Match Brands, Warranty Coverage, and Monthly Payment Options."
      heroImage="/lovable-uploads/54e19190-d790-4747-b321-98b35c7c7972.png"
      imageAlt="Selection of refurbished premium smartphones showing iPhone and Android devices"
      filter={{
        refurbished: "ONLY_REFURB"
      }}
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
