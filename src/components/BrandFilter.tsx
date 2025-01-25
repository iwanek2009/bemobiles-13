export const BrandFilter = () => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.name}
            className="flex items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors"
          >
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="h-20 w-full object-contain" // Increased height by 8px (from h-12 to h-20)
            />
          </button>
        ))}
      </div>
    </div>
  );
};