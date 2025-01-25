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
      logo: "/placeholder.svg"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.name}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors gap-2"
          >
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`} 
              className="h-8 object-contain"
            />
            <span className="font-medium text-sm">{brand.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};