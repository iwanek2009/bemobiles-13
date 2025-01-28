import { create } from 'zustand';
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BrandFilterStore {
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
}

export const useBrandFilter = create<BrandFilterStore>((set) => ({
  selectedBrand: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
}));

export const BrandFilter = () => {
  const { selectedBrand, setSelectedBrand } = useBrandFilter();
  
  const brands = [
    { 
      name: "Apple", 
      logo: "/lovable-uploads/ea8ead47-6118-4894-bc62-fd23580b79f1.png"
    },
    { 
      name: "Samsung", 
      logo: "/lovable-uploads/1c71bb6f-4693-4bbe-8e90-6c96c7066b79.png"
    },
    { 
      name: "Google", 
      logo: "/lovable-uploads/b53f9160-6075-444a-abe9-c8b4b56362ea.png"
    },
    { 
      name: "Sony", 
      logo: "/lovable-uploads/352dd185-33dc-4cfd-84c6-80760dadd3cf.png"
    },
    { 
      name: "Honor", 
      logo: "/lovable-uploads/df83f3e3-20c0-4ec8-86d9-4bdde97b863d.png"
    },
  ];

  const handleBrandClick = (brandName: string) => {
    if (selectedBrand === brandName) {
      setSelectedBrand(null);
    } else {
      setSelectedBrand(brandName);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-[1000px]">
      <div className="hidden md:grid grid-cols-5 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => handleBrandClick(brand.name)}
            className={`relative flex items-center justify-center p-2 border rounded-lg transition-colors ${
              selectedBrand === brand.name 
                ? 'border-primary bg-primary/5' 
                : 'hover:border-primary'
            }`}
          >
            {selectedBrand === brand.name && (
              <div className="absolute top-2 right-2">
                <Check className="h-5 w-5 text-primary" />
              </div>
            )}
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="h-20 w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>

      <div className="md:hidden relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {brands.map((brand) => (
              <CarouselItem key={brand.name} className="pl-2 basis-1/2 sm:basis-1/3">
                <button
                  onClick={() => handleBrandClick(brand.name)}
                  className={`relative flex items-center justify-center p-2 border rounded-lg transition-colors w-full ${
                    selectedBrand === brand.name 
                      ? 'border-primary bg-primary/5' 
                      : 'hover:border-primary'
                  }`}
                >
                  {selectedBrand === brand.name && (
                    <div className="absolute top-2 right-2">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="h-16 w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 sm:-left-12 flex bg-white shadow-md">
            <ArrowLeft className="h-4 w-4" />
          </CarouselPrevious>
          <CarouselNext className="absolute -right-4 sm:-right-12 flex bg-white shadow-md">
            <ArrowRight className="h-4 w-4" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};