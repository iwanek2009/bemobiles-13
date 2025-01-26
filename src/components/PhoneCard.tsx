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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative px-6 pt-6 pb-4 -mx-6 -mt-6">
        <img 
          src={image} 
          alt={name} 
          className="w-52 h-auto object-contain mx-auto" 
        />
      </div>
      
      <div className="p-6 pt-0">
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