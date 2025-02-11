
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Pixel8ProFAQ = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="networks">
          <AccordionTrigger className="text-left">
            What networks offer Google Pixel 8 Pro contracts in the UK?
          </AccordionTrigger>
          <AccordionContent>
            The Google Pixel 8 Pro is available on all major UK networks including Three, O2, Vodafone, ID Mobile, and Lebara. Each provider offers different contract lengths, data allowances, and additional benefits. You can compare all network deals using our comparison tool to find the best coverage and price for your needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cameras">
          <AccordionTrigger className="text-left">
            How do the Pixel 8 Pro cameras compare to previous Pixel models?
          </AccordionTrigger>
          <AccordionContent>
            The Pixel 8 Pro features a significantly upgraded camera system with a 50 MP main camera (ƒ/1.68 aperture), 48 MP ultrawide with improved Macro Focus, and 48 MP telephoto lens. This represents Google&apos;s most advanced camera setup to date, offering enhanced low-light performance, better zoom capabilities, and professional-grade controls for manual photography settings.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="storage">
          <AccordionTrigger className="text-left">
            What storage options are available for the Pixel 8 Pro, and how does this affect contract prices?
          </AccordionTrigger>
          <AccordionContent>
            The Pixel 8 Pro comes with 128GB internal storage. Contract prices vary based on storage size, with higher storage variants typically increasing both monthly payments and upfront costs. We recommend considering your storage needs carefully when comparing deals, as this can&apos;t be expanded later.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="5g">
          <AccordionTrigger className="text-left">
            Does the Pixel 8 Pro support 5G on all UK networks?
          </AccordionTrigger>
          <AccordionContent>
            Yes, the Pixel 8 Pro supports 5G connectivity across all major UK networks. However, 5G availability depends on your location and chosen network&apos;s coverage. Most contracts include 5G access at no extra cost, but it&apos;s worth checking network coverage in your area before committing to a specific provider.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ai">
          <AccordionTrigger className="text-left">
            What makes the Pixel 8 Pro&apos;s AI features different from other smartphones?
          </AccordionTrigger>
          <AccordionContent>
            The Pixel 8 Pro features Google&apos;s Tensor G3 chip with built-in Gemini Nano AI, offering unique capabilities like Magic Editor for advanced photo editing, Audio Magic Eraser, Live Translate in 49 languages, and enhanced Call Screen. These AI features are specifically optimized for the Pixel and aren&apos;t available on other Android phones.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="updates">
          <AccordionTrigger className="text-left">
            How long will the Pixel 8 Pro receive software updates?
          </AccordionTrigger>
          <AccordionContent>
            Google has committed to providing 7 years of OS and security updates for the Pixel 8 Pro, which is the longest support period offered for any Pixel device. This means your phone will receive the latest Android versions, security patches, and feature drops until 2030, making it a long-term investment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
