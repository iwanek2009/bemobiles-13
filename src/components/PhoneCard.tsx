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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-row items-center p-6">
        <div className="w-1/2">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-auto object-contain mx-auto" 
            loading="lazy"
            decoding="async"
            width="176"
            height="176"
          />
          <PhoneColorSelector colors={colors} phoneName={name} />
        </div>
        
        <div className="w-1/2 text-left pl-6">
          <div className="mb-2">
            <div className="text-sm text-gray-600">{brand}</div>
            <h3 className="font-semibold text-xl">{name}</h3>
          </div>

          <div className="mb-4">
            <div className="text-sm text-gray-600">No upfront cost from</div>
            <div className="font-semibold text-lg">£{monthlyPrice.toFixed(2)} per month</div>
          </div>

          <Button 
            onClick={() => handleFilteredDeals(getFilterId(brand, name))} 
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            See all deals
          </Button>
        </div>
      </div>
    </div>
  );
};