
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
  brand,
}: PhoneCardProps) => {
  const handleFilteredDeals = () => {
    let filterObj;
    
    switch (name) {
      case "iPhone 16":
        filterObj = { 
          families: [1968],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "iPhone 16 Pro":
        filterObj = { 
          families: [1970],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "iPhone 16 Pro Max":
        filterObj = { 
          families: [1971],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "iPhone 15":
        filterObj = { 
          families: [1890],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Galaxy A53":
        filterObj = { 
          families: [1760],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Galaxy 23FE":
        filterObj = { 
          families: [1916],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Galaxy S24":
        filterObj = { 
          families: [1904],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Galaxy S24 Ultra":
        filterObj = { 
          families: [1906],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Pixel 9":
        filterObj = { 
          families: [1962],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Pixel 9 Pro":
        filterObj = { 
          families: [1963],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Pixel 9 Pro Fold":
        filterObj = { 
          families: [1965],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Pixel 8 Pro":
        filterObj = { 
          families: [1901],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      case "Pixel 8":
        filterObj = { 
          families: [1900],
          upfront_price: {
            min: 0,
            max: 0
          }
        };
        break;
      default:
        return;
    }

    const encodedFilter = encodeURIComponent(JSON.stringify(filterObj));
    window.location.href = `/mobile-phones?filter=${encodedFilter}`;
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
                onClick={handleFilteredDeals}
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
