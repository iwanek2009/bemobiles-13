
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I activate a new phone contract in Southampton?",
      answer: "When choosing mobile phone deals in Southampton, most networks offer same-day activation for new contracts. Online orders typically activate within 2-4 hours after purchase, while in-store activations at Southampton locations like West Quay Shopping Centre are often immediate. Some premium next-day delivery services are also available for online orders in the Southampton area."
    },
    {
      question: "Which network provides the most reliable 5G coverage in Southampton?",
      answer: "Southampton enjoys strong 5G coverage from major networks. While comparing mobile phone deals in Southampton, you'll find that EE, Vodafone, and O2 all offer extensive 5G coverage, particularly in central areas, West Quay, and the university district. Coverage strength can vary by specific location, so we recommend using our coverage checker tool when comparing deals."
    },
    {
      question: "What special phone deals are available for Southampton residents?",
      answer: "Many mobile phone deals in Southampton come with local benefits. These can include exclusive in-store promotions at Southampton retail locations, special seasonal offers, and local price matching. Whether you're looking online or in-store, our comparison tool shows you all available Southampton-specific deals from every major network."
    },
    {
      question: "How do Southampton's online phone deals compare to in-store offers?",
      answer: "While comparing mobile phone deals in Southampton, you'll find that online prices often offer better value due to lower overhead costs. However, in-store locations in Southampton provide advantages like immediate setup, face-to-face support, and occasional exclusive local promotions. Our comparison tool shows both online and in-store offers to help you find the best deal."
    },
    {
      question: "What documentation do I need for a phone contract in Southampton?",
      answer: "When applying for mobile phone deals in Southampton, you'll typically need: proof of ID (passport or driving license), proof of Southampton address (utility bill or bank statement), and UK bank account details. Some networks may require additional documentation for specific deals or if you're new to the UK."
    },
    {
      question: "Can I keep my current phone number when switching to a new Southampton contract?",
      answer: "Yes, when choosing new mobile phone deals in Southampton, you can keep your existing number through a simple process called porting. Just request your PAC code from your current provider and provide it to your new network. This typically takes 1-2 business days to complete, and your service won't be interrupted."
    },
    {
      question: "What types of budget phone options are available in Southampton?",
      answer: "Southampton offers numerous affordable mobile phone deals. These include mid-range devices like the iPhone 13 and Samsung Galaxy A series, SIM-only deals if you already have a device, and special promotions on flagship phones. Our comparison tool can help you filter Southampton deals by price range to find options within your budget."
    },
    {
      question: "How can I find the best mobile phone deals in Southampton?",
      answer: "To find the best mobile phone deals in Southampton, use our comparison tool to: compare prices across all networks, check coverage in your specific Southampton location, view both online and in-store offers, and filter by your preferred phone model or contract type. We update our deals daily to ensure you get the most current prices and promotions."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions About Phone Deals in Southampton</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenItem(openItem === index ? null : index)}
              className="w-full p-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              {openItem === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-600" />
              )}
            </button>
            
            {openItem === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
        <p className="text-gray-600">
          Still have questions about mobile phone deals in Southampton? Contact our local support team or visit one of our partner stores in Southampton for personalized assistance.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
