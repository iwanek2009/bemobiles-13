import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const InfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Uswitch tips</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Should I choose a pay monthly or SIM only deal?
            </AccordionTrigger>
            <AccordionContent>
              Pay monthly deals are great if you want a new phone and can spread the cost.
              SIM only deals are better if you're happy with your current phone and just need data and minutes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How to choose the best mobile phone deal
            </AccordionTrigger>
            <AccordionContent>
              Consider your usage needs, budget, and preferred networks. Compare deals across providers
              and look for special offers or cashback deals.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};