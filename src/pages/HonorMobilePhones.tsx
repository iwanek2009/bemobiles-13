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

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <PageText variant="h2" className="text-center mb-8">
              Differences Between Models
            </PageText>
            
            <PageText className="mb-6">
              Learning about the distinctions between different types of smartphone models when shopping for a new one can save valuable time. Honor, which has a different design for all the phones within its N series as well as various options catered to everything from casual use to peak performance. Here's what to consider:
            </PageText>

            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <PageText variant="h3" className="mb-4">
                  Standard vs Pro Models
                </PageText>
                <div className="space-y-4">
                  <div>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Standard Models:
                    </PageText>
                    <PageText>
                      Best for everyday tasks, social media and casual photography. They're affordable while packing all of the basic features you might need.
                    </PageText>
                  </div>
                  <div>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Pro Models:
                    </PageText>
                    <PageText>
                      Designed for power users, with better cameras, extended battery life and enhanced processing power for multitasking and gaming.
                    </PageText>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100">
                <PageText variant="h3" className="mb-4">
                  Key Specs to Compare:
                </PageText>
                <ul className="space-y-4">
                  <li>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Battery Life:
                    </PageText>
                    <PageText>
                      Choose models with Will keep bringing you all day.
                    </PageText>
                  </li>
                  <li>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Camera Features:
                    </PageText>
                    <PageText>
                      From selfies to panoramic landscapes, Honor's AI-enhanced cameras never fail to impress.
                    </PageText>
                  </li>
                  <li>
                    <PageText variant="h3" className="text-lg font-medium mb-2">
                      Screen Quality:
                    </PageText>
                    <PageText>
                      Catch up on your favorite shows or play games on high-resolution screens that pop.
                    </PageText>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default HonorMobilePhones;