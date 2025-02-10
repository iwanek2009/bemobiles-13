
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much is the iPhone 15 Pro Max on contract in the UK?",
      answer: "Spoiler alert: I've also been using an iPhone 15 Pro Max while writing this review. Is it worth the extra money over the iPhone 15 Pro? The iPhone 15 Pro Max justifies its higher price with a number of exclusive features: a larger 6.7-inch display, a longer battery life (up to 29 hours of video playback) and a superior 5x telephoto camera. If you appreciate a larger screen for media consumption and sophisticated photography capabilities, the Pro Max model gives you a great deal."
    },
    {
      question: "What storage options are available for iPhone 15 Pro Max?",
      answer: "Go for 256GB unless you do photo/video work (in which case 512GB is better), and 1TB is really for pro users dealing with ProRes video or other large media files ( we review the new MacBook Pro here)."
    },
    {
      question: "Which networks offer iPhone 15 Pro Max contracts in the UK?",
      answer: "The USB-C port supports up to 27W fast charging, so you can get the wattage to about 50% battery in around 30 minutes, given that you are using a compatible charger. It also supports Thunderbolt data transfer speeds of up to 10Gb/s, making it great for moving large amounts of ProRes videos and photos."
    },
    {
      question: "Can I get the iPhone 15 Pro Max with no upfront cost?",
      answer: "The customizable Action Button takes the place of the traditional mute switch, letting you assign different function, from fast access to the camera, torch, voice memos or even shortcuts. This is especially helpful for accessing your most-used features without having to unlock the device."
    },
    {
      question: "What colors is the iPhone 15 Pro Max available in?",
      answer: "The iPhone 15 Pro Max's aerospace-grade titanium frame is significantly stronger and lighter than the previous stainless steel versions. It's also resistant to scratches and fingerprints, although we still suggest using a case for additional protection."
    },
    {
      question: "What's the difference between iPhone 15 Pro Max and other iPhone 15 models?",
      answer: "The camera's trump card is its 5x telephoto lens (120mm equivalent), which is only on the Pro Max. Paired with the 48MP main sensor, it provides excellent zoom quality and detail. It adds new features, including macro photography, ProRAW support, and better low-light performance."
    },
    {
      question: "Do iPhone 15 Pro Max contracts include Apple services?",
      answer: "You'll also find that previous generation cases (including Apple's iPhone 14 Pro Max) won't fit thanks to its new titanium design and USB-C port. You'll require a case made explicitly for the iPhone 15 Pro Max."
    },
    {
      question: "What's the battery life like on the iPhone 15 Pro Max?",
      answer: "Under heavy use, the iPhone 15 Pro Max will usually last a day. You are able to get up to 29 hours of video watching, 25 hours of streaming video, or 95 hours of audio listening. Actual battery life is influenced by 5G use, screen brightness and running apps."
    }
  ];

  return (
    <Card className="w-full max-w-4xl p-6">
      <h2 className="text-2xl font-bold mb-6">iPhone 15 Pro Max FAQs</h2>
      <div className="divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Card>
  );
};

export default FAQSection;
