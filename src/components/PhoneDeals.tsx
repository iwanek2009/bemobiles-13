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
    colors: ["#222222", "#D946EF", "#0EA5E9", "#1A1F2C", "#FFFFFF"],  // black, pink, teal, Ultramarine, white
    brand: "Apple"
  },
  {
    id: 2,
    name: "iPhone 15",
    image: "/lovable-uploads/794c7a99-1639-472d-97c3-1ebb220a09b1.png",
    monthlyPrice: 27.00,
    upfrontCost: 0,
    colors: ["black", "blue", "green", "pink", "yellow"],
    brand: "Apple"
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    image: "/lovable-uploads/7700d6bc-54cb-487b-8ed0-b5a4d6bdf229.png",
    monthlyPrice: 57.49,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#E3E3E0", "#DBD3C8", "#4A4A4A"],  // White, Natural, Desert, Black Titanium
    brand: "Apple"
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    image: "/lovable-uploads/da14abe3-8ee8-4ee5-8776-c3682eafb410.png",
    monthlyPrice: 43.00,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#E3E3E0", "#DBD3C8", "#4A4A4A"],  // White, Natural, Desert, Black Titanium
    brand: "Apple"
  },
  {
    id: 5,
    name: "Galaxy A55",
    image: "/lovable-uploads/a793194d-2367-4165-9b13-79c754bea505.png",
    monthlyPrice: 30.00,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#000000"],  // White, Black
    brand: "Samsung"
  },
  {
    id: 6,
    name: "Galaxy 24FE",
    image: "/lovable-uploads/90806a56-c2fd-4ca0-9846-45f404b74737.png",
    monthlyPrice: 30.00,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#000000"],  // White, Black
    brand: "Samsung"
  }
];

export const PhoneDeals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">{deals.length} phones found</div>
        <select className="border rounded-lg px-4 py-2">
          <option>Sort by Bestselling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative px-6 pt-6 pb-4 -mx-6 -mt-6">
              <img 
                src={deal.image} 
                alt={deal.name} 
                className="w-52 h-auto object-contain mx-auto" 
              />
            </div>
            
            <div className="p-6 pt-0">
              <div className="flex justify-center gap-1 mb-4">
                {deal.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-gray-200"
                    style={{ backgroundColor: color }}
                    title={
                      deal.name === "iPhone 16" ? 
                        index === 0 ? "Black" :
                        index === 1 ? "Pink" :
                        index === 2 ? "Teal" :
                        index === 3 ? "Ultramarine" :
                        "White"
                      :
                      deal.name.includes("Pro") ?
                        index === 0 ? "White Titanium" :
                        index === 1 ? "Natural Titanium" :
                        index === 2 ? "Desert Titanium" :
                        "Black Titanium"
                      :
                      color === "#F5F5F7" ? "White" :
                      color === "#000000" ? "Black" :
                      color
                    }
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
          </div>
        ))}
      </div>
    </div>
  );
};
