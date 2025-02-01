import { Button } from "@/components/ui/button";
import { PageText } from "@/components/ui/page-text";

export const SonyCTA = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('[data-stickee-widget-id]');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-6 bg-secondary/50 rounded-lg p-8">
      <PageText>
        Sony mobile phone contract deals in the UK are more than just a way to finance your next smartphone—they're an invitation to a richer, more immersive tech experience. With pro-grade displays, innovative camera systems, and a host of ecosystem perks, Sony offers a compelling alternative to the more familiar iPhone, Pixel, and Galaxy options.
      </PageText>

      <PageText>
        Ready to explore the best Sony offers?
        Head over to bemobiles.com to check out the latest deals, compare contract options, and even explore trade-in programs that make upgrading a breeze. Whether you're a professional photographer, a dedicated gamer, or simply someone who loves cutting-edge tech, there's a Sony deal out there waiting for you.
      </PageText>

      <PageText>
        Make the smart move—choose a contract that suits your lifestyle and enjoy the brilliant world of Sony mobile innovation today!
      </PageText>

      <div className="flex justify-center pt-4">
        <Button 
          onClick={scrollToWidget}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          Find Your Perfect Sony Deal
        </Button>
      </div>
    </section>
  );
};