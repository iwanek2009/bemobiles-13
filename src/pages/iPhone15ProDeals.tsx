import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";
import { IPhoneFAQ } from "@/components/iphone/IPhoneFAQ";

const iPhone15ProDeals = () => {
  useSEO({
    title: "iPhone 15 Pro Deals & Contracts | Compare Premium Plans",
    description: "Experience premium iPhone 15 Pro with flexible monthly contracts. Compare no upfront cost plans, unlimited data bundles & exclusive carrier benefits."
  });

  return (
    <TheMobile
      title="iPhone 15 Pro deals."
      description="Discover Premium Monthly Plans for iPhone 15 Pro with Unlimited Data Options, Network Perks, and Exclusive Provider Benefits"
      heroImage="/lovable-uploads/841c1985-3bfc-46da-a318-829a0136c9fc.png"
      imageAlt="iPhone 15 Pro in Space Black finish showcasing its premium design"
      filter={{ families: [1892] }}
      sort="UPFRONT_PRICE"
      imageProps={{
        loading: "eager",
        fetchPriority: "high",
        width: "800",
        height: "800",
        decoding: "async"
      }}
    >
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <section>
            <PageText variant="h2">How do you choose Best iPhone 15 Pro deals</PageText>
            <div className="mt-4 space-y-4 text-gray-700">
              <PageText>
                Finding the perfect iPhone 15 Pro deal doesn't have to be complicated. At bemobiles.com, we simplify your search by showcasing comprehensive deals from across UK carriers, including exclusive offers that aren't advertised on their main websites. Our comparison tool helps you discover special promotions that could save you money over your contract term.
              </PageText>
              
              <PageText>
                The iPhone 15 Pro stands out with its A17 Pro chip, titanium design, and professional-grade camera system. Our platform lets you compare deals from major networks and resellers, filter by cost and data allowance, and understand the total cost of ownership - all to ensure you get the best value iPhone 15 Pro deal.
              </PageText>
              
              <PageText>
                Find more details about iPhone 15 Pro on the{" "}
                <a 
                  href="https://www.apple.com/uk/shop/buy-iphone/iphone-15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  official Apple Store
                </a>.
              </PageText>
            </div>
          </section>

          <section>
            <PageText variant="h2">Available iPhone 15 Pro Deals & Contract Offers</PageText>
            <div className="mt-4 space-y-4">
              <PageText>
                Looking for an iPhone 15 Pro contract? Our comprehensive comparison tool allows you to search to find exactly what you need. Filter through a wide range of options including:
              </PageText>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Data allowances from 1GB to unlimited</li>
                <li>Plans from major networks including O2, Vodafone, and iD Mobile</li>
                <li>Both new and refurbished handset options</li>
                <li>Choice of colors: Black, Blue, Champagne, and White</li>
                <li>Various storage options: 128GB, 256GB, 512GB, and 1000GB</li>
              </ul>
              
              <PageText>
                Whether you're looking for a plan with unlimited minutes and texts, or a specific data allowance, our platform helps you compare and find the most competitive iPhone 15 Pro deals available in the UK market today.
              </PageText>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <PageText variant="h3">Also looking for other iPhone 15 models?</PageText>
                <PageText>Check out our deals for:</PageText>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="text-primary hover:underline">
                      iPhone 15 Pro Max deals
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:underline">
                      iPhone 15 deals
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile-phones/iPhone-15-Plus-Deals" className="text-primary hover:underline">
                      iPhone 15 Plus deals
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <PageText variant="h2">What are the iPhone 15 Pro best features?</PageText>
            
            <div className="mt-6 space-y-8">
              <div>
                <PageText variant="h3">Design and Display</PageText>
                <PageText>
                  The iPhone 15 Pro features a lightweight titanium frame and a stunning 6.1-inch Super Retina XDR OLED display with ProMotion 120Hz technology. The Always-On display keeps important information visible with minimal battery impact.
                </PageText>
              </div>

              <div>
                <PageText variant="h3">Battery Life and Performance</PageText>
                <PageText>
                  With the powerful A17 Pro chip and efficient battery management, you get all-day battery life with up to 23 hours of video playback. Fast charging capability gets you to 50% in just 30 minutes.
                </PageText>
              </div>

              <div>
                <PageText variant="h3">Entertainment and Gaming</PageText>
                <PageText>
                  Experience console-quality gaming with ray tracing support and immersive Spatial Audio. The A17 Pro chip ensures smooth performance for all your entertainment needs.
                </PageText>
              </div>

              <div>
                <PageText variant="h3">Additional Standout Features</PageText>
                <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                  <li>USB-C port for universal connectivity and faster data transfer</li>
                  <li>Pro camera system with 48MP main sensor</li>
                  <li>Action button for quick access to custom functions</li>
                  <li>Advanced safety features including Emergency SOS and Crash Detection</li>
                  <li>5G connectivity for ultra-fast mobile data</li>
                </ul>
              </div>
            </div>
          </section>

          <IPhoneFAQ />
        </div>
      </div>
    </TheMobile>
  );
};

export default iPhone15ProDeals;
