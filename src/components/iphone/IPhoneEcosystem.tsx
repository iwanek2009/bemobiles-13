import { PageText } from "@/components/ui/page-text";

export const IPhoneEcosystem = () => {
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
      </div>
    </div>
  );
};