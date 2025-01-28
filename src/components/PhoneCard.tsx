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
  filterId?: number;
}

export const PhoneCard = ({
  name,
  image,
  monthlyPrice,
  colors,
  brand,
  filterId,
}: PhoneCardProps) => {
  const getFilterId = (brand: string, model: string) => {
    // If a specific filterId is provided, use it
    if (filterId) return filterId;
    
    // Otherwise use the default mapping
    const modelMap: { [key: string]: number } = {
      'iPhone 16': 1968,
      'iPhone 15': 1971,
      'iPhone 16 Pro': 1972,
      'iPhone 16 Pro Max': 1973,
      'Galaxy A55': 1974,
      'Galaxy 24FE': 1975,
      'Galaxy S24': 1976,
      'Galaxy S24 Ultra': 1906,
    };

    return modelMap[model] || (brand === "Apple" ? 1968 : brand === "Samsung" ? 1969 : brand === "Google" ? 1970 : 0);
  };

  const handleFilteredDeals = (filterId: number) => {
    const basePath = brand === "Samsung" ? "/samsung-mobile-phones" : "/mobile-phones";
    window.location.href = `${basePath}?filter=${filterId}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="md:p-6 p-4">
        <div className="flex md:flex-col items-center md:items-center gap-4">
          {/* Image Section */}
          <div className="relative w-1/3 md:w-full md:px-6 md:pt-6 md:pb-[6px] md:-mx-6 md:-mt-6">
            <img 
              src={image} 
              alt={name} 
              className="w-full md:w-44 h-auto object-contain mx-auto" 
              loading="lazy"
              decoding="async"
              width="176"
              height="176"
            />
            <div className="mt-2 flex justify-center md:hidden">
              <PhoneColorSelector colors={colors} phoneName={name} />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 w-2/3 md:w-full text-center">
            <div className="hidden md:block">
              <PhoneColorSelector colors={colors} phoneName={name} />
            </div>

            <div className="mb-2 md:mb-4">
              <div className="text-sm text-gray-600">{brand}</div>
              <h3 className="font-semibold text-xl md:text-lg">{name}</h3>
            </div>

            <div className="mb-3 md:mb-4">
              <div className="text-sm text-gray-600">No upfront cost from</div>
              <div className="font-semibold">£{monthlyPrice.toFixed(2)} per month</div>
            </div>

            <div className="flex justify-center">
              <Button 
                onClick={() => handleFilteredDeals(getFilterId(brand, name))} 
                className="w-3/4"
                variant="default"
              >
                See all deals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};