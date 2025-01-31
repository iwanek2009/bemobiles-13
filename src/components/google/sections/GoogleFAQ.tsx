import { useState } from "react";
import { CollapsibleFAQ } from "@/components/hero/CollapsibleFAQ";
import { PageText } from "@/components/ui/page-text";

export const GoogleFAQ = () => {
  const [openFAQs, setOpenFAQs] = useState<{ [key: string]: boolean }>({});

  const handleOpenChange = (id: string, isOpen: boolean) => {
    setOpenFAQs(prev => ({ ...prev, [id]: isOpen }));
  };

  const faqs = [
    {
      id: "camera-quality",
      question: "Are Google phones worth it for camera quality?",
      answer: "Absolutely. Pixel devices consistently shine in photography, particularly in low-light scenarios, thanks to Google's sophisticated image processing."
    },
    {
      id: "trade-in",
      question: "Can I trade in my old phone for a discount on a Pixel?",
      answer: "Many carriers and Google's own store offer trade-in programs. Depending on your device's condition, you can significantly reduce the upfront cost."
    },
    {
      id: "contract-vs-outright",
      question: "Is it better to buy a Pixel outright or on contract?",
      answer: "If you prefer smaller monthly bills, a contract could be appealing. However, buying outright may save you money overall, especially if you find a good SIM-only deal."
    },
    {
      id: "software-updates",
      question: "Does Google provide software updates longer than other Android brands?",
      answer: "Generally, yes. Pixel devices receive day-one OS updates and security patches for several years, ensuring your phone stays current longer."
    },
    {
      id: "new-launches",
      question: "Should I wait for new Pixel launches before switching?",
      answer: "If you want the latest features, it's wise to wait for the annual Pixel release. Otherwise, older models often go on sale around launch season."
    },
    {
      id: "best-carriers",
      question: "Which carriers offer the best deals on Google phones?",
      answer: "It varies by region and promotion. Compare multiple carriers to see who's offering the most data, best discounts, or value-added perks."
    },
    {
      id: "security",
      question: "How secure are Pixel phones?",
      answer: "Pixel phones integrate Google's Titan M security chip and frequent software updates, making them among the most secure Android devices on the market."
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