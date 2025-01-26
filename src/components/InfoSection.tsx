import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const InfoSection = () => {
  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <h2 className="text-xl font-semibold mb-4">How Pay Monthly Phone Contracts Work</h2>
        <p className="mb-4">
          At bemobiles.com, we help you compare mobile phone contracts. Once you find your ideal deal, you'll continue to the retailer's website to complete your purchase. Here's what happens next:
        </p>
        <h3 className="text-lg font-semibold mb-2">Contract Setup</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Review terms and complete credit check on retailer's site</li>
          <li>Pay any upfront device costs (if applicable)</li>
          <li>Receive and activate your new phone</li>
          <li>Note your contract end date to compare future deals</li>
        </ul>
        
        <h3 className="text-lg font-semibold mb-2">Keeping Your Number</h3>
        <p className="mb-2">Transfer your existing number in four easy steps:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Text 'PAC' to 65075</li>
          <li>Share your PAC code with the new network</li>
          <li>Watch for confirmation (transfer takes a few days)</li>
          <li>Continue using your existing number on the new plan</li>
        </ul>
        
        <p className="mt-4">
          Compare the latest pay monthly phone contracts across major UK retailers at bemobiles.com.
        </p>
      </div>
    </div>
  );
};