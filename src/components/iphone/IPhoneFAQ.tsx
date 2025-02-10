
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
      id: "cost",
      question: "How much is the iPhone 15 Pro on contract in the UK?",
      answer: "The iPhone 15 Pro contract prices vary depending on your chosen network and plan. Monthly payments typically start from £35 with higher upfront costs, to £65+ with lower upfront costs. Use our comparison tool to find the best deals across all UK networks and discover potential savings."
    },
    {
      id: "storage",
      question: "What storage options are available for iPhone 15 Pro?",
      answer: "The iPhone 15 Pro is available in 128GB, 256GB, 512GB, and 1TB storage options. Choose based on your needs: 128GB for casual users, 256GB for regular photo/video enthusiasts, and 512GB or 1TB for professionals who work with large files."
    },
    {
      id: "networks",
      question: "Which networks offer iPhone 15 Pro contracts in the UK?",
      answer: "All major UK networks including O2, Vodafone, and iD Mobile offer iPhone 15 Pro contracts. Each carrier provides different benefits - O2 offers Priority rewards, Vodafone includes entertainment packages, while smaller carriers often provide more competitive pricing."
    },
    {
      id: "no-upfront",
      question: "Can I get the iPhone 15 Pro with no upfront cost?",
      answer: "Yes, many providers offer iPhone 15 Pro deals with no upfront cost. However, these typically come with higher monthly payments. Our comparison tool can help you find no upfront cost deals and understand the total contract value."
    },
    {
      id: "colors",
      question: "What colors is the iPhone 15 Pro available in?",
      answer: "The iPhone 15 Pro comes in Natural Titanium, Blue Titanium, White Titanium, and Black Titanium finishes. All colors are available across different storage configurations and networks."
    },
    {
      id: "pro-vs-max",
      question: "What's the difference between iPhone 15 Pro and iPhone 15 Pro Max?",
      answer: "The main differences are screen size (6.1\" vs 6.7\"), battery life (Pro Max offers longer usage), and camera capabilities (Pro Max has enhanced zoom features). The Pro Max is also slightly heavier and more expensive."
    },
    {
      id: "apple-services",
      question: "Do iPhone 15 Pro contracts include Apple services?",
      answer: "Some carriers offer Apple services like Apple TV+ or Apple Music as part of their contracts. Always check the contract details as these offers may be time-limited and vary between providers."
    },
    {
      id: "refurbished",
      question: "Is iPhone 15 Pro available on refurbished contracts?",
      answer: "Yes, refurbished iPhone 15 Pro models are available on contract from select providers. These offers can provide significant savings while still maintaining high quality standards and warranties."
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
