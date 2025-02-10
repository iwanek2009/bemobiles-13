
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

const iPhone15ProMaxDeals = () => {
  useSEO({
    title: "iPhone 15 Pro Max Deals & Contracts | Premium iPhone Plans",
    description: "Discover premium iPhone 15 Pro Max with maximum performance. Compare exclusive plans, unlimited data packages & premium network benefits."
  });

  return (
    <TheMobile
      title="iPhone 15 Pro Max deals."
      description="Find Premium Monthly Plans for iPhone 15 Pro Max with Unlimited Data Options, Network Perks, and Exclusive Provider Packages"
      heroImage="/lovable-uploads/2309a3ca-7eec-435d-a9d6-f30a38181db1.png"
      imageAlt="iPhone 15 Pro Max in Space Black showcasing its premium design and triple camera system"
      filter={{ families: [1893] }}
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
            <PageText variant="h2">How do you choose Best iPhone 15 Pro Max deals</PageText>
            <div className="mt-4 space-y-4 text-gray-700">
              <PageText>
                Looking for the best iPhone experience? The iPhone 15 Pro Max is Apple's tallest, biggest and most powerful smartphone. We have teamed up with major UK networks and even resellers to present you the best deals, some of which are even special offers not found on standard carrier websites.
              </PageText>
              
              <PageText>
                Our intelligent comparison tool allows you to discover the best contracts available for your needs. The 6.7-inch Super Retina XDR display doesn't have any shortage of headache-inducing specifications, either, and the iPhone 15 Pro Max has taken first place in an entirely new category with its first-to-market 5x telephoto camera system, making it Apple's premium flagship product.
              </PageText>
              
              <PageText>
                See our deals walkthrough, which allows you to filter the options by data packages, network preferences and payment terms to find a contract that suits your budget and usage.
              </PageText>
              
              <PageText>
                Find more details about iPhone 15 Pro Max on the{" "}
                <a 
                  href="https://www.apple.com/uk/shop/buy-iphone/iphone-15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  official Apple Store
                </a>.
              </PageText>

              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <PageText>Looking for other iPhone models? Compare deals for the:</PageText>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="text-primary hover:underline">
                      iPhone 15 Pro
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:underline">
                      iPhone 15
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile-phones/iPhone-16-Deals" className="text-primary hover:underline">
                      iPhone 16
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile-phones/iPhone-16-Pro-Deals" className="text-primary hover:underline">
                      iPhone 16 Pro
                    </Link>
                  </li>
                  <li>
                    <Link to="/mobile-phones/iphone-deals" className="text-primary hover:underline">
                      View all iPhone deals
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </TheMobile>
  );
};

export default iPhone15ProMaxDeals;
