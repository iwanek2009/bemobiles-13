import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";

const SamsungMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Samsung phone deals."
        description="Discover Samsung's diverse range of smartphones, from premium Galaxy S series to innovative foldables."
        heroImage="/lovable-uploads/7957768e-94f3-4f05-b4fc-1c67cb7ddeab.png"
        imageAlt="Samsung Galaxy S23 smartphone in blue color"
        filter={{ brands: [5] }}
      />
      
      <div className="bg-[#F1F1F1] py-8">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-4 flex items-center gap-3">
            How to Compare Samsung Mobile Phone Deals
          </h2>
          <p className="text-lg text-[#4B5563] leading-relaxed mb-8">
            Choosing a Samsung deal can feel overwhelming at first. Between monthly plan costs, data allowances, and contract lengths, it's easy to get lost in the details. Here's a simple approach to make the process smoother:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Identify Your Samsung Preferences
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Decide which model suits you best—maybe you want the latest S-series, the more affordable A-series, or a foldable Galaxy Z device.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Check Data Requirements
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                If you regularly stream HD content or game online, you'll need a robust data package. Look for carriers or bundles offering higher data caps and fast connection speeds.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Compare Monthly Costs
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Compare different carrier deals, factoring in contract length, handset cost, and any promotional discounts.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Look at Coverage
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Ensure your carrier offers a strong signal in your area. You can also compare broadband offers if you want a complete connectivity solution (home internet + mobile).
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Evaluate Extras
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Consider perks like free streaming subscriptions, trade-in bonuses, or discounted accessory bundles to sweeten the deal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-6">
            How to Choose the Right Samsung Mobile Phone
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                List Your Must-Haves
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Are you looking for a top-of-the-line camera? A large, immersive screen? A foldable form factor? Samsung caters to a wide range of preferences with the A, S, and Z-series.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Check Available Offers
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Whether you're eyeing the Galaxy S25 or a budget-friendly Galaxy A device, gather multiple quotes. The best route might involve contacting providers directly or using comparison websites.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Factor in Broadband
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Since many rely on stable home internet for tasks like streaming and remote work, it's wise to compare broadband deals concurrently. This ensures your data usage on your Samsung phone is supported by a reliable connection at home.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Weigh Contract vs. SIM-Only
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-[#4B5563]">
                <li>Contract: Spreads out phone costs, often includes bonuses or freebies.</li>
                <li>SIM-Only: Requires an upfront phone purchase but may have lower monthly fees. Ideal if you already own a Samsung phone or plan to buy one outright.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#111111] mb-3">
                Review Contract Terms and Potential Price Rises
              </h3>
              <p className="text-[#4B5563] leading-relaxed">
                Always check the small print for price adjustments that may occur mid-contract. Some providers lock in prices, but others adjust rates annually.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SamsungMobilePhones;
