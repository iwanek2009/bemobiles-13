import { Button } from "@/components/ui/button";
import { PhoneColorSelector } from "./PhoneColorSelector";
import { Link } from "react-router-dom";

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
  const getWidgetLink = () => {
    switch (name) {
      case "iPhone 15":
        return "/mobile-phones#stickee-widget-1890";
      case "iPhone 16":
        return "/mobile-phones#stickee-widget-1891";
      default:
        return "/mobile-phones";
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const link = getWidgetLink();
    window.location.href = link;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative px-6 pt-6 pb-[15px] -mx-6 -mt-6">
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

        <Link to={getWidgetLink()} onClick={handleClick} className="w-full">
          <Button className="w-full">See all deals</Button>
        </Link>
      </div>
    </div>
  );
};