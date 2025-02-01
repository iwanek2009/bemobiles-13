import { PageText } from "@/components/ui/page-text";

export const SonyContracts = () => {
  return (
    <section className="mt-12">
      <PageText variant="h2">Contract Options & Carrier Deals in the UK</PageText>
      <PageText>
        One of the best parts about choosing a Sony phone in the UK is the variety of contract options available. Here's what to look for:
      </PageText>
      
      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Flexible Payment Plans</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Spread the cost over 24 months or more.</li>
            <li>Enjoy manageable monthly payments that fit your budget.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Trade-In Offers</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Upgrade your device while reducing the overall cost.</li>
            <li>Check out programs that give you credit for your old phone.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Bundle Promotions</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Combine your phone with accessories like wireless earbuds or smartwatches.</li>
            <li>Look for family plans that offer savings across multiple lines.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Carrier Exclusives</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Certain deals might include perks like additional data, free streaming subscriptions, or exclusive software features.</li>
          </ul>
          <PageText className="mt-4">
            Be sure to compare offers from popular UK carriers such as{" "}
            <a href="https://ee.co.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EE</a>,{" "}
            <a href="https://www.vodafone.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vodafone</a>,{" "}
            <a href="https://www.o2.co.uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">O2</a>, and{" "}
            <a href="https://www.three.co.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Three</a>, as many often have exclusive promotions tailored for Sony devices.
          </PageText>
        </div>
      </div>
    </section>
  );
};