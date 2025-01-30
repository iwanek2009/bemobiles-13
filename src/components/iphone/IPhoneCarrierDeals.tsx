import { PageText } from "@/components/ui/page-text";

export const IPhoneCarrierDeals = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-6 max-w-[1000px] rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/20 p-8">
        <PageText variant="h2" className="mb-6">
          Contract Options and Carrier Deals
        </PageText>
        <PageText>
          A smartphone is a big investment, and carriers know it. That's why they often bundle exciting promotions and flexible payment options to make iPhones more accessible.
        </PageText>

        <PageText variant="h3" className="mt-8">
          1. Best iPhone Contracts
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>24-Month Contract – Spread the cost of your iPhone over two years, usually with lower monthly installments.</li>
          <li>12-Month Flex Plan – Pay off your device faster and upgrade sooner, though monthly costs might be higher.</li>
          <li>iPhone Payment Plans – Some carriers offer interest-free financing, allowing you to pay off your phone in easy installments while keeping the door open for early upgrades.</li>
        </ul>

        <PageText variant="h3">
          2. Carrier-Specific Deals
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>Exclusive Promotions – Carriers frequently provide iPhone 16 offers, discounted data plans, or gift cards to sweeten the deal.</li>
          <li>Bundle Deals – Combine your iPhone with an Apple Watch or AirPods for a discounted monthly rate.</li>
          <li>Family Plans – Get multiple lines under one account, often with shared data or additional perks like free streaming subscriptions.</li>
        </ul>

        <PageText variant="h3">
          3. iPhone Upgrade Programs
        </PageText>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li>Annual Upgrade – Some carriers let you upgrade your iPhone every year without paying off the full device cost.</li>
          <li>iPhone Trade-In Value – Apple's Trade In program or carrier trade-ins can knock hundreds off the cost of a new device when you exchange your old phone.</li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <PageText className="text-blue-800 font-medium">
            Pro Tip: Always read the fine print before committing to a contract. Look for hidden fees, early cancellation charges, and data usage policies to ensure you're getting the best iPhone contracts for your needs.
          </PageText>
        </div>
      </div>
    </div>
  );
};