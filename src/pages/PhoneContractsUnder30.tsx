import { TheMobile } from "@/components/templates/TheMobile";

const PhoneContractsUnder30 = () => {
  return (
    <TheMobile
      title="Phone Contracts Under £30"
      description="Discover great value phone contracts under £30 monthly. Compare mid-range smartphones with flexible payment options."
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