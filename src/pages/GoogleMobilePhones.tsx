import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";

const GoogleMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Google phone deals."
        description="Experience pure Android with Google's Pixel phones, featuring exceptional camera capabilities and AI-powered features."
        heroImage="/lovable-uploads/b53f9160-6075-444a-abe9-c8b4b56362ea.png"
        imageAlt="Google Pixel smartphone"
        filter={{ brands: [7] }}
      />
      <Footer />
    </>
  );
};

export default GoogleMobilePhones;