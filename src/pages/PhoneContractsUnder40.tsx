import { TheMobile } from "@/components/templates/TheMobile";

const PhoneContractsUnder40 = () => {
  return (
    <TheMobile
      title="Phone Contracts Under £40"
      description="Browse premium phone contracts under £40 per month. Find the perfect balance of features and affordability with our curated selection."
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