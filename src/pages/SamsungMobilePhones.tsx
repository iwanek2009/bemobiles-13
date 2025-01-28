import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroTemplate } from "@/components/templates/MobileStyle";
import { manufacturers } from "@/data/manufacturers";
import { StickeeWidget } from "@/components/StickeeWidget";

const SamsungMobilePhones = () => {
  const samsung = manufacturers.find(m => m.id === 'samsung');
  
  // Filter for Samsung phones (family ID 2)
  const filter = { families: [2] };

  return (
    <>
      <Header />
      <HeroTemplate
        title="Samsung Mobile Phones"
        description={samsung?.description || "Discover Samsung's diverse range of smartphones, from premium Galaxy S series to innovative foldables."}
        heroImage="/lovable-uploads/e5af43e9-0d34-4eab-8779-a0261436c139.png"
      >
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {samsung?.models.map((model) => (
              <div key={model.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Storage: {model.specs.storage.join(", ")}</p>
                  <p>Screen: {model.specs.screenSize}</p>
                  <p>Camera: {model.specs.camera}</p>
                  <p>Battery: {model.specs.battery}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-primary font-semibold">
                    £{model.price.monthly}/mo
                  </div>
                  <div className="text-sm text-gray-600">
                    £{model.price.upfront} upfront
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <StickeeWidget filter={filter} />
      </HeroTemplate>
      <Footer />
    </>
  );
};

export default SamsungMobilePhones;