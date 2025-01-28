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
      <div className="md:p-6 p-4">
        <div className="flex md:flex-col items-center md:items-start gap-4">
          {/* Image Section */}
          <div className="relative w-1/3 md:w-full md:px-6 md:pt-6 md:pb-[15px] md:-mx-6 md:-mt-6">
            <img 
              src={image} 
              alt={name} 
              className="w-full md:w-44 h-auto object-contain mx-auto" 
              loading="lazy"
              decoding="async"
              width="176"
              height="176"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 w-2/3 md:w-full">
            <PhoneColorSelector colors={colors} phoneName={name} />

            <div className="text-left md:text-center mb-2 md:mb-4">
              <div className="text-sm text-gray-600">{brand}</div>
              <h3 className="font-semibold text-xl md:text-lg">{name}</h3>
            </div>

            <div className="text-left md:text-center mb-3 md:mb-4">
              <div className="text-sm text-gray-600">No upfront cost from</div>
              <div className="font-semibold">£{monthlyPrice.toFixed(2)} per month</div>
            </div>

            <Button 
              onClick={() => handleFilteredDeals(getFilterId(brand, name))} 
              className="w-full bg-black hover:bg-black/90"
              variant="default"
            >
              See all deals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};