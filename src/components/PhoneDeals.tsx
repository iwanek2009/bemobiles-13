import { Button } from "@/components/ui/button";

interface PhoneDeal {
  id: number;
  name: string;
  image: string;
  monthlyPrice: number;
  upfrontCost: number;
  colors: string[];
  brand: string;
}

const deals: PhoneDeal[] = [
  {
    id: 1,
    name: "iPhone 16",
    image: "/lovable-uploads/be162283-678e-45f8-af1b-fece2422a8e0.png",
    monthlyPrice: 30.00,
    upfrontCost: 0,
    colors: ["black", "blue", "purple", "white"],
    brand: "Apple"
  },
  {
    id: 2,
    name: "iPhone 15",
    image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
    monthlyPrice: 27.00,
    upfrontCost: 0,
    colors: ["black", "blue", "green", "pink", "yellow"],
    brand: "Apple"
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
    monthlyPrice: 57.49,
    upfrontCost: 0,
    colors: ["black"],
    brand: "Apple"
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    image: "/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png",
    monthlyPrice: 43.00,
    upfrontCost: 0,
    colors: ["black", "gold"],
    brand: "Apple"
  }
];

export const PhoneDeals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">62 phones found</div>
        <select className="border rounded-lg px-4 py-2">
          <option>Sort by Bestselling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="relative mb-4">
              <img src={deal.image} alt={deal.name} className="w-full h-auto" />
            </div>
            
            <div className="flex justify-center gap-1 mb-4">
              {deal.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <div className="text-center mb-4">
              <div className="text-sm text-gray-600">{deal.brand}</div>
              <h3 className="font-semibold text-lg">{deal.name}</h3>
            </div>

            <div className="text-center mb-4">
              <div className="text-sm text-gray-600">No upfront cost from</div>
              <div className="font-semibold">£{deal.monthlyPrice.toFixed(2)} per month</div>
            </div>

            <Button className="w-full">See all deals</Button>
          </div>
        ))}
      </div>
    </div>
  );
};
