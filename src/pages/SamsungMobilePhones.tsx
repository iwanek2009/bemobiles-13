import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-8">
            Frequently Asked Questions (FAQs)
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                Is it possible to bundle my Samsung phone deal with broadband services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, many carriers allow you to bundle mobile plans with broadband packages. Doing so can often result in lower overall costs and added convenience of a single monthly bill.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                How do I check the best internet speeds available for my Samsung phone?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Use a coverage checker or consult your carrier's website. This is similar to how you'd check internet coverage for a home broadband service—you simply enter your postcode and review the results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                What's the ideal data allowance for everyday use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Most average users can manage with 10–20GB of monthly data. However, if you frequently stream HD videos, game online, or work remotely, consider 20GB or more to avoid speed throttling and extra charges.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                Can I switch to a new carrier if I'm still under contract?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You can, but you'll likely need to pay an early termination fee. Check your current contract's terms or ask your provider for details about any exit fees before switching.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                What should I do if I have poor signal at home?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                First, see if your provider offers Wi-Fi calling to route calls through your broadband connection. Some carriers also provide signal boosters or femtocells to strengthen your indoor reception.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                Are there special low-cost plans for people on benefits or tight budgets?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Some carriers provide discounted plans or promotions that can help reduce monthly phone and broadband costs. It's worth asking your provider about social tariffs or financial assistance options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900">
                Do all Samsung phones support 5G?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Not all Samsung devices are 5G-ready. Generally, the newest S and Z-series phones support 5G. Always check the phone's specifications or ask your carrier to confirm 5G compatibility.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="mt-8 text-lg text-gray-600">
            Now that you're equipped with essential tips and insights, it's time to explore the best Samsung mobile phone deals. Don't forget to compare broadband offers to maximize your digital experience—start your search today and enjoy unbeatable connectivity wherever you go!
          </p>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SamsungMobilePhones;