
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const PhoneContractsUnder50 = () => {
  useSEO({
    title: "Phone Contracts Under £50 | Compare Affordable Monthly Plans",
    description: "Explore affordable phone contracts under £50 monthly. Compare top smartphones, data packages & network benefits across leading carriers."
  });

  return (
    <TheMobile
      title="Phone Contracts Under £50"
      description="Compare and Find Phone Plans Under £50 Across Networks - Match Popular Models, Data Allowances, and Monthly Benefits."
      heroImage="/lovable-uploads/c4b1f69a-317a-4432-8107-44e0f36aadd1.png"
      imageAlt="Latest smartphones under £50 monthly contracts"
      filter={{
        upfront_price: {
          min: 10,
          max: 50
        }
      }}
      sort="MONTHLY_PRICE"
    />
  );
};

export default PhoneContractsUnder50;
