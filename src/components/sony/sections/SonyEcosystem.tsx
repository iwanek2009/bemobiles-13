import { PageText } from "@/components/ui/page-text";

export const SonyEcosystem = () => {
  return (
    <section className="mt-12">
      <PageText variant="h2">Ecosystem Perks & Integration</PageText>
      <PageText>
        While Apple's seamless iOS and Google's AI-driven ecosystem get a lot of attention, Sony brings its own set of ecosystem benefits:
      </PageText>

      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Integration with Sony Entertainment</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Sync your phone with Sony TVs, audio systems, and even PlayStation consoles.</li>
            <li>Enjoy a unified multimedia experience whether you're streaming or gaming.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Accessory Compatibility</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Pair your Xperia with high-quality headphones, smartwatches, and cameras designed to work in harmony with Sony's hardware.</li>
            <li>Benefit from features like remote control for your Sony camera or a dedicated gaming mode.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Regular Software Updates</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Stay current with the latest Android features and security enhancements, keeping your device safe and efficient.</li>
          </ul>
          <PageText className="mt-4">
            These ecosystem perks make the transition into the Sony world smoother and more enjoyable, especially if you're already a fan of Sony's other tech products.
          </PageText>
        </div>
      </div>
    </section>
  );
};