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
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary tracking-tight mb-8">
            How to Compare Samsung Mobile Phone Deals
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Choosing a Samsung deal can feel overwhelming at first. Between monthly plan costs, data allowances, and contract lengths, it's easy to get lost in the details. Here's a simple approach to make the process smoother:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3">
                Identify Your Samsung Preferences
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Decide which model suits you best—maybe you want the latest S-series, the more affordable A-series, or a foldable Galaxy Z device.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3">
                Check Data Requirements
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If you regularly stream HD content or game online, you'll need a robust data package. Look for carriers or bundles offering higher data caps and fast connection speeds.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3">
                Compare Monthly Costs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Compare different carrier deals, factoring in contract length, handset cost, and any promotional discounts.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3">
                Look at Coverage
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensure your carrier offers a strong signal in your area. You can also compare broadband offers if you want a complete connectivity solution (home internet + mobile).
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-3">
                Evaluate Extras
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Consider perks like free streaming subscriptions, trade-in bonuses, or discounted accessory bundles to sweeten the deal.
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