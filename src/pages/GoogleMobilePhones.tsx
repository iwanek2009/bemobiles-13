import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { GoogleHeroSection } from "@/components/google/GoogleHeroSection";
import { GoogleBenefitsSection } from "@/components/google/GoogleBenefitsSection";
import { GoogleComparisonSection } from "@/components/google/GoogleComparisonSection";
import { GoogleContractSection } from "@/components/google/GoogleContractSection";
import { GooglePerfectPixelSection } from "@/components/google/GooglePerfectPixelSection";
import { GoogleCTASection } from "@/components/google/sections/GoogleCTASection";

const GoogleMobilePhones = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <GoogleHeroSection />
      <div id="phones-section">
        <StickeeWidget filter={{ brands: [7, 15] }} />
      </div>
      <GoogleBenefitsSection />
      <GoogleComparisonSection />
      <GoogleContractSection />
      <GooglePerfectPixelSection />
      <GoogleCTASection />
      <Footer />
    </div>
  );
};

export default GoogleMobilePhones;