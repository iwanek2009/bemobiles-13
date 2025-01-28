import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneDeals } from "@/components/PhoneDeals";
import { BrandFilter } from "@/components/BrandFilter";
import { StickeeWidget } from "@/components/StickeeWidget";

const MobilePhones = () => {
  useEffect(() => {
    // Force a full browser reload when component mounts
    window.location.reload();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile Phones</h1>
          <p className="text-gray-600">Find the perfect mobile phone deal for you</p>
        </div>
      </div>
      <BrandFilter />
      <StickeeWidget />
      <PhoneDeals />
      <Footer />
    </div>
  );
};

export default MobilePhones;