import { useState } from "react";
import { CollapsibleFAQ } from "@/components/hero/CollapsibleFAQ";
import { PageText } from "@/components/ui/page-text";

export const IPhoneFAQ = () => {
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});

  const handleOpenChange = (id: string, isOpen: boolean) => {
    setOpenFAQs(prev => ({ ...prev, [id]: isOpen }));
  };

  const faqs = [
    {
      id: "bundle",
      question: "Can I bundle my iPhone plan with home broadband services?",
      answer: "Absolutely. Some carriers offer discounts for combining mobile and home internet. This can be a smart way to save on overall costs while enjoying a single monthly bill."
    },
    {
      id: "switch-time",
      question: "What is the best time to switch to a new contract?",
      answer: "Typically, near the end of your existing contract or during new iPhone launch seasons. Carriers often run special promotions or upgrade incentives around these times."
    },
    {
      id: "data-usage",
      question: "How much data do I need for casual browsing and social media?",
      answer: "If you only use basic apps and moderate social media, 5-10GB a month should suffice. However, always consider some extra room in case your usage spikes."
    },
    {
      id: "network-lock",
      question: "Are iPhones locked to a specific network when buying on contract?",
      answer: "Many carriers do lock phones initially, but they often unlock the device at no extra cost once your contract is paid off. Check with your provider for their specific policy."
    },
    {
      id: "keep-number",
      question: "Can I keep my number when switching to a new contract?",
      answer: "Yes. You can request a PAC (Porting Authorization Code) from your old carrier and provide it to your new provider. This ensures you retain your existing phone number."
    },
    {
      id: "slow-connection",
      question: "What should I do if my connection speed is too slow at home?",
      answer: "Run a speed test and see if your broadband is underperforming. If so, consider upgrading your broadband plan or contacting your provider about possible improvements."
    },
    {
      id: "sim-only",
      question: "Is it cheaper to buy an iPhone outright and then get a SIM-only deal?",
      answer: "It can be cheaper in some cases, especially if you find a good SIM-only plan. However, spreading out the cost via monthly installments may be more manageable for many people."
    }
  ];

  return (
    <div className="bg-[#F8F9FA] py-12">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <PageText variant="h2" className="mb-8">
          Frequently Asked Questions (FAQs)
        </PageText>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <CollapsibleFAQ
              key={faq.id}
              open={openFAQs[faq.id] || false}
              onOpenChange={(isOpen) => handleOpenChange(faq.id, isOpen)}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};