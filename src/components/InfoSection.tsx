import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, CreditCard, DollarSign, ChartBar, Check, Heart } from "lucide-react";
export const InfoSection = () => {
  return <>
      <div className="w-full bg-[#F1F1F1] py-8">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6 flex items-center gap-3">
            <Smartphone className="text-primary w-8 h-8" />
            How Pay Monthly Phone Contracts Work
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At bemobiles.com, we help you compare mobile phone contracts. Once you find your ideal deal, you'll continue to the retailer's website to complete your purchase. Here's what happens next:
          </p>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CreditCard className="text-primary w-6 h-6" />
                Contract Setup
              </h3>
              <ul className="list-none pl-6 text-gray-600 leading-relaxed space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Review terms and complete credit check on retailer's site
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Pay any upfront device costs (if applicable)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Receive and activate your new phone
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Note your contract end date to compare future deals
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className="text-primary w-6 h-6" />
                Keeping Your Number
              </h3>
              <p className="text-gray-600 leading-relaxed mb-3">Transfer your existing number in four easy steps:</p>
              <ul className="list-none pl-6 text-gray-600 leading-relaxed space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Text 'PAC' to 65075
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Share your PAC code with the new network
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Watch for confirmation (transfer takes a few days)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                  Continue using your existing number on the new plan
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 font-medium mt-8 flex items-center gap-2">
            <DollarSign className="text-primary w-6 h-6" />
            Compare the latest pay monthly phone contracts across major UK retailers at bemobiles.com.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#F1F1F1] py-8">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6 flex items-center gap-3">
            <ChartBar className="text-primary w-8 h-8" />
            Why Choose a Pay Monthly Phone Contract?
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Discover the smart way to own the latest smartphones with minimal upfront investment through pay monthly contracts. At bemobiles.com, we help you understand exactly what you're getting – and what to watch out for.
          </p>

          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Advantages of Pay Monthly Contracts
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <DollarSign className="text-primary w-5 h-5" />
                    Affordable Access to Premium Phones
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Get your dream phone without breaking the bank. Pay monthly contracts let you spread the cost of flagship devices, making premium smartphones instantly accessible with manageable monthly payments.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <ChartBar className="text-primary w-5 h-5" />
                    Enhanced Usage Allowances
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy generous data, call, and text packages that typically surpass pay-as-you-go offerings. Perfect for heavy users who stream, browse, and stay connected throughout the day.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CreditCard className="text-primary w-5 h-5" />
                    Hassle-Free Payments
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Say goodbye to inconvenient top-ups. Your monthly bill is automatically handled through Direct Debit, ensuring uninterrupted service and better budget management.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Heart className="text-primary w-5 h-5" />
                    Exclusive Rewards
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Many contracts include valuable extras like streaming subscriptions or entertainment packages. At bemobiles.com, we'll help you evaluate whether these perks truly add value to your plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-slate-200 hover:bg-slate-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Important Considerations
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Check className="text-primary w-5 h-5" />
                    Long-Term Commitment
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Consider your contract length carefully. Most plans run for 12-36 months, requiring consistent monthly payments throughout the term.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Check className="text-primary w-5 h-5" />
                    Credit Requirements
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Networks typically require credit checks before approval. We recommend checking your eligibility before applying to avoid disappointment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Check className="text-primary w-5 h-5" />
                    Total Cost Analysis
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    While monthly payments are lower, the overall cost may exceed buying a phone outright. Compare total contract values to make an informed decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};