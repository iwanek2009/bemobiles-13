
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const PhoneContractsUnder20 = () => {
  useSEO({
    title: "Phone Contracts Under £20 | Compare Budget Monthly Plans",
    description: "Explore budget phone contracts under £20 monthly. Compare affordable smartphones, data packages & UK network deals across carriers."
  });

  return (
    <TheMobile
      title="Phone Contracts Under £20"
      description="Compare and Find Phone Contracts Under £20 Across Networks - Match Essential Models, Data Packages, and Budget-Friendly Benefits."
      heroImage="/lovable-uploads/a793194d-2367-4165-9b13-79c754bea505.png"
      imageAlt="Phone contracts under £20"
      filter={{
        upfront_price: {
          min: 0,
          max: 0
        }
      }}
      sort="MONTHLY_PRICE"
    />
  );
};

export default PhoneContractsUnder20;
