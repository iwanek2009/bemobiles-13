
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const PhoneContractsUnder30 = () => {
  useSEO({
    title: "Phone Contracts Under £30 | Compare Affordabl Monthly Plans",
    description: "Find affordable phone contracts under £30 monthly. Compare great value smartphones, data packages & network perks across carriers."
  });

  return (
    <TheMobile
      title="Phone Contracts Under £30"
      description="Compare and Find Phone Plans Under £30 Across all UK Networks - Match Budget-Friendly Models, Data Packages, and Monthly Value."
      heroImage="/lovable-uploads/90806a56-c2fd-4ca0-9846-45f404b74737.png"
      imageAlt="Phone contracts under £30"
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

export default PhoneContractsUnder30;

