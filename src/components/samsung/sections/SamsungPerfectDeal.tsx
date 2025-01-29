import { Button } from "@/components/ui/button";

export const SamsungPerfectDeal = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('[data-stickee-widget-id]');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-[#111111] mb-4">
        10. Find Your Perfect Samsung Deal at BeMobiles
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        Ready to explore the latest Samsung phone deals? At bemobiles.com, we specialize in Samsung Galaxy contracts tailored to your lifestyle. Whether you're eyeing the shiny new S-series flagship, the affordable A-series, or a foldable Z-series device, our expert team is here to guide you.
      </p>

      <div className="flex justify-center pt-4">
        <Button 
          onClick={scrollToWidget}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          Find Your Perfect Samsung Deal
        </Button>
      </div>
    </section>
  );
};