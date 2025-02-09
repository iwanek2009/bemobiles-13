
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const PhoneContractsUnder50 = () => {
  useSEO({
    title: "Phone Contracts Under £50 | Compare Affordable Monthly Plans",
    description: "Explore affordable phone contracts under £50 monthly. Compare top smartphones, data packages & network benefits across leading carriers."
  });

  return (
    <TheMobile
      title="Compare and Find Phone Plans Under £50 Across Networks - Match Popular Models, Data Allowances, and Monthly Benefits."
      description="Explore affordable phone contracts under £50 monthly. Compare top smartphones, data packages & network benefits across leading carriers."
      heroImage="/lovable-uploads/837a4649-6387-4c3a-bf7a-d6c05b0595cc.png"
      imageAlt="Modern smartphones showing iPhone and Android devices"
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
