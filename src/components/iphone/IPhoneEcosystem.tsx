import { Button } from "@/components/ui/button";
import { PageText } from "@/components/ui/page-text";

export const IPhoneEcosystem = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('#phones-section');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-6 max-w-[1000px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/20 p-8">
        <PageText variant="h2" className="mb-6">
          Apple Ecosystem Benefits
        </PageText>
        <PageText>
          One of the biggest reasons people stay loyal to iPhones is the seamless Apple ecosystem:
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Instant Sync – Photos taken on your iPhone appear on your iPad or MacBook within seconds via iCloud.</li>
          <li>Universal Apps – Many iOS apps work across multiple Apple devices, providing a consistent user experience.</li>
          <li>Hand Off – Start reading a web article on your iPhone and pick up exactly where you left off on your iPad or Mac.</li>
          <li>Smart Accessories – Pairing AirPods, an Apple Watch, or a HomePod with your iPhone is quick and hassle-free.</li>
          <li>Privacy and Security – Apple's integrated approach to software and hardware keeps your data well-protected.</li>
        </ul>

        <PageText variant="h2" className="mb-6">
          Comparison with Competitors
        </PageText>
        <PageText>
          While Android devices also offer top-of-the-line features, Apple distinguishes itself through:
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Longer OS Updates – iPhones typically receive software updates for up to five or six years.</li>
          <li>Unified Operating System – iOS is optimized for the iPhone's hardware, ensuring smooth performance.</li>
          <li>High Resale/Trade-In Value – iPhones hold their value well, making upgrades more affordable in the long run.</li>
        </ul>

        <PageText variant="h2" className="mb-6">
          Tips for Choosing the Right iPhone Model
        </PageText>

        <div className="space-y-8">
          <div>
            <PageText variant="h3" className="mb-4">
              1. Determine Your Needs
            </PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Budget – The standard iPhone or iPhone Plus models might be sufficient if you're cost-conscious.</li>
              <li>Camera Importance – If you're serious about photography or videography, the Pro models' advanced camera features are worth the splurge.</li>
              <li>Screen Size – Small hands or pocket-size convenience? Stick to the standard iPhone. Prefer a tablet-like experience? Go for the Pro Max.</li>
            </ul>
          </div>

          <div>
            <PageText variant="h3" className="mb-4">
              2. Consider Timing
            </PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Best Time to Buy – Apple typically announces new iPhones in the fall, leading to discounts on older models. Look out for big sales or carrier promotions around these launch windows.</li>
              <li>iPhone Contract Renewal – If your contract is ending, carriers might offer loyalty deals or special upgrades on the latest iPhones.</li>
            </ul>
          </div>

          <div>
            <PageText variant="h3" className="mb-4">
              3. Evaluate Carrier Coverage
            </PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Data Needs – Streamers and gamers should opt for bigger data allowances or unlimited plans.</li>
              <li>Network Reliability – Check coverage maps or ask friends about the carrier's signal strength in your area.</li>
              <li>Roaming and Travel – Frequent travelers might prefer carriers with strong international roaming plans.</li>
            </ul>
          </div>
        </div>

        <PageText variant="h2" className="mt-12 mb-6">
          Making the Most of Your iPhone Contract
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>Set Up Apple Pay – Convenient and secure payments via your device or Apple Watch.</li>
          <li>Optimize iCloud Storage – Store photos and files in the cloud to free up phone space and automatically back up data.</li>
          <li>Use Focus Modes – iOS allows you to customize notifications for work, sleep, or personal time.</li>
          <li>Check for Bundles – Combine your phone plan with broadband or TV for potential discounts, especially on iPhone family plans.</li>
          <li>Protect Your Device – AppleCare+ or carrier insurance covers accidental damage—worth considering for peace of mind.</li>
        </ul>

        <PageText variant="h2" className="mb-6">
          Future iPhone Trends
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-12">
          <li>Foldable Concepts – Rumors hint at Apple exploring foldable phone tech to rival other OEMs.</li>
          <li>Further Camera Innovations – Expect even greater sensor upgrades, possibly bridging the gap between phone and DSLR.</li>
          <li>Increased AI Integration – Machine learning might shape how iPhones handle daily tasks, from photography suggestions to predictive text improvements.</li>
        </ul>

        <div className="mt-16 text-center space-y-6 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <PageText variant="h2" className="text-blue-900">
            Ready to Find Your Perfect iPhone Deal?
          </PageText>
          
          <PageText className="max-w-3xl mx-auto">
            At bemobiles.com, we specialize in matching you with the best iPhone contracts to fit your budget, usage, and lifestyle. Whether you're eyeing the iPhone 16 Pro Max for its colossal screen or the standard iPhone for everyday reliability, our friendly experts will guide you every step of the way. Explore our iPhone carrier deals today, or reach out to our support team for personalized recommendations.
          </PageText>

          <div className="space-y-4">
            <PageText variant="h3" className="text-blue-800">
              Why Wait?
            </PageText>
            <ul className="list-none space-y-2 text-blue-700">
              <li>Browse the latest iPhone 16 offers</li>
              <li>Compare iPhone Pro Max plans</li>
              <li>Save money with iPhone upgrade deals</li>
              <li>Get the right plan for your family with iPhone family plans</li>
            </ul>
          </div>

          <PageText className="text-blue-700">
            Join the Apple ecosystem and experience the seamless integration of iOS devices. Let bemobiles.com help you find an iPhone contract
          </PageText>

          <Button
            onClick={scrollToWidget}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Find Your Perfect iPhone Deal
          </Button>
        </div>
      </div>
    </div>
  );
};