import { Button } from "@/components/ui/button";
import { PhoneColorSelector } from "./PhoneColorSelector";

interface PhoneCardProps {
  id: number;
  name: string;
  image: string;
  monthlyPrice: number;
  upfrontCost: number;
  colors: string[];
  brand: string;
}

export const PhoneCard = ({ 
  name, 
  image, 
  monthlyPrice, 
  colors, 
  brand 
}: PhoneCardProps) => {
  const handleFilteredDeals = (filterId: number) => {
    window.location.href = `/mobile-phones?filter=${filterId}`;
  };

  const getFilterId = (brand: string, name: string) => {
    if (brand.toLowerCase() === 'apple') {
      if (name === 'iPhone 15') {
        return 1890;
      }
      return 1968;
    }
    if (brand.toLowerCase() === 'samsung') {
      if (name === 'Galaxy A55') {
        return 11760;
      }
      return 1904;
    }
    return 1904; // Default for others
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:flex sm:flex-row md:block lg:block">
      <div className="relative px-6 pt-6 pb-[15px] -mx-6 -mt-6 sm:w-1/2 md:w-full lg:w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-44 h-auto object-contain mx-auto" 
          loading="lazy"
          decoding="async"
          width="176"
          height="176"
        />
      </div>
      
      <div className="p-6 pt-0 sm:w-1/2 md:w-full lg:w-full sm:flex sm:flex-col sm:justify-center">
        <div className="text-center sm:text-left md:text-center lg:text-center mb-4">
          <div className="text-sm text-gray-600">{brand}</div>
          <h3 className="font-semibold text-2xl sm:text-xl md:text-lg lg:text-lg">{name}</h3>
        </div>

        <PhoneColorSelector colors={colors} phoneName={name} />

        <div className="text-center sm:text-left md:text-center lg:text-center mb-4">
          <div className="text-sm text-gray-600">No upfront cost from</div>
          <div className="font-semibold text-xl">£{monthlyPrice.toFixed(2)} per month</div>
        </div>

        <Button 
          onClick={() => handleFilteredDeals(getFilterId(brand, name))} 
          className="w-full bg-black hover:bg-gray-800 text-white"
          variant="secondary"
        >
          See all deals
        </Button>
      </div>
    </div>
  );
};