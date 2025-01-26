import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const InfoSection = () => {
  return (
    <div className="w-full bg-[#F1F1F1] py-8">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">How Pay Monthly Phone Contracts Work</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          At bemobiles.com, we help you compare mobile phone contracts. Once you find your ideal deal, you'll continue to the retailer's website to complete your purchase. Here's what happens next:
        </p>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Contract Setup</h3>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Review terms and complete credit check on retailer's site</li>
              <li>Pay any upfront device costs (if applicable)</li>
              <li>Receive and activate your new phone</li>
              <li>Note your contract end date to compare future deals</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Keeping Your Number</h3>
            <p className="text-gray-600 leading-relaxed mb-3">Transfer your existing number in four easy steps:</p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Text 'PAC' to 65075</li>
              <li>Share your PAC code with the new network</li>
              <li>Watch for confirmation (transfer takes a few days)</li>
              <li>Continue using your existing number on the new plan</li>
            </ul>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 font-medium mt-8">
          Compare the latest pay monthly phone contracts across major UK retailers at bemobiles.com.
        </p>
      </div>
    </div>
  );
};