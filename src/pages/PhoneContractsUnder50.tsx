import { TheMobile } from "@/components/templates/TheMobile";

const PhoneContractsUnder50 = () => {
  return (
    <TheMobile
      title="Phone Contracts Under £50"
      description="Explore high-end phone contracts under £50 monthly. Access flagship smartphones and premium features with flexible payment plans."
      heroImage="/lovable-uploads/da14abe3-8ee8-4ee5-8776-c3682eafb410.png"
      imageAlt="Phone contracts under £50"
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

export default PhoneContractsUnder50;