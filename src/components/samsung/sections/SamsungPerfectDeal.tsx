export const SamsungPerfectDeal = () => {
  const scrollToWidget = () => {
    const widgetElement = document.querySelector('[data-stickee-widget-id]');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-bold text-[#111111] mb-4">
        10. Find Your Perfect Samsung Deal at BeMobiles
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        <a 
          onClick={scrollToWidget}
          className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors underline"
        >
          Ready to explore the latest Samsung phone deals? At bemobiles.com, we specialize in Samsung Galaxy contracts tailored to your lifestyle. Whether you're eyeing the shiny new S-series flagship, the affordable A-series, or a foldable Z-series device, our expert team is here to guide you.
        </a>
      </p>
    </section>
  );
};