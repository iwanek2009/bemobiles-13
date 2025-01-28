import { Button } from "@/components/ui/button";
import { PhoneCard } from "./PhoneCard";
import { useBrandFilter } from "./BrandFilter";

interface PhoneDeal {
  id: number;
  name: string;
  image: string;
  monthlyPrice: number;
  upfrontCost: number;
  colors: string[];
  brand: string;
  filterId?: number;
}

const deals: PhoneDeal[] = [
  {
    id: 1,
    name: "iPhone 16",
    image: "/lovable-uploads/be162283-678e-45f8-af1b-fece2422a8e0.png",
    monthlyPrice: 30.00,
    upfrontCost: 0,
    colors: ["#222222", "#D946EF", "#0EA5E9", "#1A1F2C", "#FFFFFF"],
    brand: "Apple"
  },
  {
    id: 2,
    name: "iPhone 15",
    image: "/lovable-uploads/794c7a99-1639-472d-97c3-1ebb220a09b1.png",
    monthlyPrice: 33.00,
    upfrontCost: 0,
    colors: ["black", "blue", "green", "pink", "yellow"],
    brand: "Apple",
    filterId: 1890
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    image: "/lovable-uploads/7700d6bc-54cb-487b-8ed0-b5a4d6bdf229.png",
    monthlyPrice: 42.99,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#E3E3E0", "#DBD3C8", "#4A4A4A"],
    brand: "Apple",
    filterId: 1970
  },
  {
    id: 4,
    name: "iPhone 16 Pro Max",
    image: "/lovable-uploads/da14abe3-8ee8-4ee5-8776-c3682eafb410.png",
    monthlyPrice: 55.99,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#E3E3E0", "#DBD3C8", "#4A4A4A"],
    brand: "Apple",
    filterId: 1971
  },
  {
    id: 5,
    name: "Galaxy A53",
    image: "/lovable-uploads/a793194d-2367-4165-9b13-79c754bea505.png",
    monthlyPrice: 13.99,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#000000"],
    brand: "Samsung",
    filterId: 1760
  },
  {
    id: 6,
    name: "Galaxy 23FE",
    image: "/lovable-uploads/90806a56-c2fd-4ca0-9846-45f404b74737.png",
    monthlyPrice: 25.00,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#000000"],
    brand: "Samsung",
    filterId: 1916
  },
  {
    id: 7,
    name: "Galaxy S24",
    image: "/lovable-uploads/6e83658a-1c9c-47f5-80f2-39e4627e3cb1.png",
    monthlyPrice: 31.00,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#000000"],
    brand: "Samsung",
    filterId: 1904
  },
  {
    id: 8,
    name: "Galaxy S24 Ultra",
    image: "/lovable-uploads/c2180d62-3e5e-4cba-a6e4-0ae0544d3d85.png",
    monthlyPrice: 30.00,
    upfrontCost: 0,
    colors: ["#F5F5F7", "#000000"],
    brand: "Samsung"
  }
];

export const PhoneDeals = () => {
  const { selectedBrand } = useBrandFilter();

  const filteredDeals = selectedBrand
    ? deals.filter(deal => deal.brand === selectedBrand)
    : deals;

  return (
    <div id="phones-section" className="container mx-auto px-4 py-8 max-w-[1000px]">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          {filteredDeals.length} phones found
        </div>
        <select className="border rounded-lg px-4 py-2">
          <option>Sort by Bestselling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredDeals.map((deal) => (
          <PhoneCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};
