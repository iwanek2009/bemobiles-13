import { Button } from "@/components/ui/button";
import { PhoneCard } from "./PhoneCard";
import { useBrandFilter } from "./BrandFilter";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PhoneDeal {
  id: number;
  name: string;
  image: string;
  monthlyPrice: number;
  upfrontCost: number;
  colors: string[];
  brand: string;
}

const fetchPhones = async () => {
  const { data: phones, error } = await supabase
    .from('phones')
    .select(`
      *,
      brands:brand_id (
        name
      )
    `);

  if (error) {
    console.error('Error fetching phones:', error);
    throw error;
  }

  // Transform the data to match the PhoneDeal interface
  return phones.map(phone => ({
    id: phone.id,
    name: phone.name,
    image: phone.image,
    monthlyPrice: phone.monthly_price,
    upfrontCost: phone.upfront_cost,
    colors: phone.colors,
    brand: phone.brands.name
  }));
};

export const PhoneDeals = () => {
  const { selectedBrand } = useBrandFilter();
  const { data: deals = [], isLoading, error } = useQuery({
    queryKey: ['phones', selectedBrand],
    queryFn: fetchPhones
  });
  
  console.log('Selected Brand:', selectedBrand);
  
  const filteredDeals = selectedBrand 
    ? deals.filter(deal => deal.brand === selectedBrand)
    : deals;
    
  console.log('Filtered Deals:', filteredDeals);

  if (isLoading) {
    return <div className="text-center py-8">Loading phones...</div>;
  }

  if (error) {
    console.error('Error loading phones:', error);
    return <div className="text-center py-8 text-red-500">Error loading phones. Please try again later.</div>;
  }

  return (
    <div id="phones-section" className="container mx-auto px-4 py-8 max-w-[1000px]">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          {filteredDeals.length} phones found
          {selectedBrand && ` for ${selectedBrand}`}
        </div>
        <select className="border rounded-lg px-4 py-2">
          <option>Sort by Bestselling</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredDeals.map((deal) => {
          console.log('Rendering phone:', deal.name);
          return <PhoneCard key={deal.id} {...deal} />;
        })}
      </div>
    </div>
  );
};