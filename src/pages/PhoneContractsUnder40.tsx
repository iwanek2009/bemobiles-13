
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const PhoneContractsUnder40 = () => {
  useSEO({
    title: "Phone Contracts Under £40 | Compare Budget Monthly Plans",
    description: "Discover value phone contracts under £40 monthly. Compare popular smartphones, data packages & network perks across leading carriers."
  });

  return (
    <TheMobile
      title="Phone Contracts Under £40"
      description="Compare and Find Phone Plans Under £40 Across all UK Networks - Match Smartphone Models, Data Allowances, and Monthly Benefits"
      heroImage="/lovable-uploads/7700d6bc-54cb-487b-8ed0-b5a4d6bdf229.png"
      imageAlt="Phone contracts under £40"
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

export default PhoneContractsUnder40;
