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
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative px-4 pt-4 pb-[10px] -mx-4 -mt-4">
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
      
      <div className="p-4">
        <PhoneColorSelector colors={colors} phoneName={name} />

        <div className="text-center mb-4">
          <div className="text-sm text-gray-600">{brand}</div>
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm text-gray-600">No upfront cost from</div>
          <div className="font-semibold">£{monthlyPrice.toFixed(2)} per month</div>
        </div>

        <Button className="w-full">See all deals</Button>
      </div>
    </div>
  );
};