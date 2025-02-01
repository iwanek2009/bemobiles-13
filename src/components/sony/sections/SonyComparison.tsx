import { Link } from "react-router-dom";
import { PageText } from "@/components/ui/page-text";

export const SonyComparison = () => {
  return (
    <section className="mt-12">
      <PageText variant="h2">Comparisons & Competitors: Where Does Sony Stand?</PageText>
      <PageText>
        While many of our readers are well-versed in <Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhone deals</Link>, <Link to="/google-mobile-phones" className="text-primary hover:underline">Pixel deals</Link>, and <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Galaxy deals</Link>, here's how Sony stacks up:
      </PageText>

      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Against iPhone:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Advantage: Sony's 4K OLED displays offer unmatched clarity and color accuracy, perfect for media lovers.</li>
            <li>Consideration: iPhones offer seamless iOS integration and features like Face ID, but Sony focuses on pro-grade camera tech and entertainment features.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Against Google Pixel:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Advantage: While Pixels are renowned for their AI-driven camera features, Sony's dedicated hardware and customizable settings let you get creative with photography.</li>
            <li>Consideration: Google offers deeper integration with its services, but Sony compensates with a premium multimedia experience.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Against Samsung Galaxy:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Advantage: Sony's minimalist design and superior audio-visual features cater to a niche market of creative professionals.</li>
            <li>Consideration: Samsung often leads in foldable tech and expansive ecosystems, yet Sony remains a strong contender with its unique blend of style and functionality.</li>
          </ul>
        </div>
      </div>

      <PageText className="mt-6">
        Ultimately, the best choice depends on your priorities. If a pro-grade display and camera are high on your list, Sony's offerings might just steal the spotlight.
      </PageText>
    </section>
  );
};