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
        <StickeeWidget filter={filter} />
      </HeroTemplate>
      <Footer />
    </>
  );
};

export default SamsungMobilePhones;