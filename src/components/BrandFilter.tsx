export const BrandFilter = () => {
  const brands = [
    { name: "Apple", logo: "apple" },
    { name: "Samsung", logo: "samsung" },
    { name: "Google", logo: "google" },
    { name: "Sony", logo: "sony" },
    { name: "Honor", logo: "honor" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.name}
            className="flex items-center justify-center p-4 border rounded-lg hover:border-primary transition-colors"
          >
            <span className="font-medium">{brand.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};