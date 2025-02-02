import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { PageText } from "@/components/ui/page-text";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";

const HonorMobilePhones = () => {
  useSEO({
    title: "Honor Mobile Phone Deals: Compare Latest Honor Phones & Plans",
    description: "Find the best Honor phone deals and contracts. Compare prices on the latest Honor smartphones and get exclusive offers on monthly plans."
  });

  return (
    <>
      <Header />
      <TheMobile
        title="Honor phone deals."
        description="Innovative smartphones combining style with cutting-edge technology at competitive prices."
        heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
        imageAlt="Honor smartphone showcasing premium design and features"
        filter={{ brands: [72] }}
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Best Honor Mobile Contract Deals — UK's Best Honor Phone Offers
            </PageText>
            
            <PageText className="text-gray-600 leading-relaxed space-y-6">
              <p>
                With the speed at which the smartphone world continues to evolve, finding the best deals and stays up to date can be as tricky as ever. Whether you're a <Link to="/iphone-mobile-phones" className="text-primary hover:underline">die-hard iOS user</Link>, a <Link to="/google-mobile-phones" className="text-primary hover:underline">Google Pixel lover</Link> or a <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung fan</Link>, there's something for you out there.
              </p>
              <p>
                But have you ever tried picking one of Honor phones? With their on-trend specs and attractive pricing, Honor is making a name for itself in the UK. In this handy guide, we're wading into the best Honor mobile contract deals out there on <Link to="/" className="text-primary hover:underline">bemobiles.com</Link>, to get guides on the ideal device and contract plan that suits your lifestyle.
              </p>
            </PageText>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HonorMobilePhones;