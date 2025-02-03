import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const ContractGuide = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('[data-stickee-widget-id]');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageText variant="h2" className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect iPhone?
          </PageText>
          
          <div className="space-y-6 mb-8">
            <PageText>
              Ready to take the next step? See the latest{" "}
              <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:underline">iPhone 15 Deals</Link>,{" "}
              <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="text-primary hover:underline">iPhone 15 Pro Deals</Link> and{" "}
              <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="text-primary hover:underline">iPhone 15 Pro Max Deals</Link>,
              and even check out other exciting options like{" "}
              <Link to="/mobile-phones/Google-Pixel-8-Deals" className="text-primary hover:underline">Google Pixel 8</Link> and{" "}
              <Link to="/mobile-phones/Galaxy-S24-Ultra-Deals" className="text-primary hover:underline">Galaxy S24 Deals</Link>.
              With clear choices, competitive pricing, and friendly support, your perfect smartphone and contract awaits.
            </PageText>
          </div>

          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 h-auto text-base"
            onClick={scrollToWidget}
          >
            Explore iPhone 15 Deals
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};