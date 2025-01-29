import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const SamsungFAQ = () => {
  return (
    <div className="bg-[#F8F9FA] py-12">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-8">
          Frequently Asked Questions (FAQs)
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              Is it possible to bundle my Samsung phone deal with broadband services?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Yes, many carriers allow you to bundle mobile plans with broadband packages. Doing so can often result in lower overall costs and added convenience of a single monthly bill.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              How do I check the best internet speeds available for my Samsung phone?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Use a coverage checker or consult your carrier's website. This is similar to how you'd check internet coverage for a home broadband service—you simply enter your postcode and review the results.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              What's the ideal data allowance for everyday use?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Most average users can manage with 10–20GB of monthly data. However, if you frequently stream HD videos, game online, or work remotely, consider 20GB or more to avoid speed throttling and extra charges.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              Can I switch to a new carrier if I'm still under contract?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              You can, but you'll likely need to pay an early termination fee. Check your current contract's terms or ask your provider for details about any exit fees before switching.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              What should I do if I have poor signal at home?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              First, see if your provider offers Wi-Fi calling to route calls through your broadband connection. Some carriers also provide signal boosters or femtocells to strengthen your indoor reception.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              Are there special low-cost plans for people on benefits or tight budgets?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Some carriers provide discounted plans or promotions that can help reduce monthly phone and broadband costs. It's worth asking your provider about social tariffs or financial assistance options.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="bg-white rounded-lg border p-2">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
              Do all Samsung phones support 5G?
            </AccordionTrigger>
            <AccordionContent className="px-4 text-gray-600">
              Not all Samsung devices are 5G-ready. Generally, the newest S and Z-series phones support 5G. Always check the phone's specifications or ask your carrier to confirm 5G compatibility.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="mt-8 text-lg text-gray-600">
          Now that you're equipped with essential tips and insights, it's time to explore the best Samsung mobile phone deals. Don't forget to compare broadband offers to maximize your digital experience—start your search today and enjoy unbeatable connectivity wherever you go!
        </p>
      </div>
    </div>
  );
};