import { Header } from "@/components/Header";
import { BrandFilter } from "@/components/BrandFilter";
import { Footer } from "@/components/Footer";
import { StickeeWidget } from "@/components/StickeeWidget";
import { useSearchParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MobilePhones = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const filter = filterParam ? { families: [Number(filterParam)] } : undefined;

  useSEO({
    title: "Mobile Phone Deals & Contracts | Best UK Phone Deals",
    description: "Compare the best mobile phone deals and contracts from UK's leading networks. Find amazing offers on the latest smartphones with flexible payment options."
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
        <div className="container mx-auto px-4 pb-0 pt-16 md:py-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contract phones deals.
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                Best mobile phone deals on the UK's biggest networks.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[320px] w-full md:mt-5">
              <img
                src="/lovable-uploads/9faf7347-cd7d-4837-bc81-2e870b83dd8a.png"
                alt="Latest iPhone models showing Pro and regular versions"
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
                fetchPriority="high"
                width="800"
                height="800"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      <StickeeWidget filter={filter} />

      {/* Bottom Content Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="space-y-12">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Mobile Contract Deals
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Looking for the perfect mobile contract that combines great smartphone deals with flexible payment plans? Whether you're eyeing an{' '}
                  <Link to="/iphone-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Apple</Link>,{' '}
                  <Link to="/google-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Google</Link>,{' '}
                  <Link to="/samsung-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Samsung</Link>, or{' '}
                  <Link to="/sony-mobile-phones" className="text-blue-600 hover:text-blue-800 underline">Sony</Link> device, 
                  bemobiles.com is here to help you navigate the world of mobile contracts and carrier offers in the UK.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From the latest releases to unbeatable bundle deals, read on for our friendly, expert guide to choosing the best phone and contract that suits your lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  UK's Best Phone Deals Offers
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Imagine upgrading your smartphone without the stress of upfront costs, while enjoying the latest features and technology from top brands. At bemobiles.com, we simplify your search by breaking down the best mobile contract deals available today.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're a tech-savvy professional, a student on a budget, or someone who just loves cutting-edge gadgets, our guide will help you make an informed decision with ease and confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobilePhones;