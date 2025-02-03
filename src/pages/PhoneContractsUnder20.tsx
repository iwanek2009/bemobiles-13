import { TheMobile } from "@/components/templates/TheMobile";

const PhoneContractsUnder20 = () => {
  return (
    <TheMobile
      title="Phone Contracts Under £20"
      description="Find the best mobile phone deals under £20 per month. Compare affordable contracts with low monthly payments from leading networks."
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