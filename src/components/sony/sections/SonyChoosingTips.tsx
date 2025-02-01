import { PageText } from "@/components/ui/page-text";

export const SonyChoosingTips = () => {
  return (
    <section className="mt-12">
      <PageText variant="h2">Tips for Choosing the Right Sony Model for You</PageText>
      <PageText>
        Choosing the perfect phone can feel overwhelming, but here are some practical tips to guide your decision:
      </PageText>

      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Budget vs. Features:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Budget-Conscious: Consider mid-range Xperia models for essential features without the premium cost.</li>
            <li>High-End Needs: If you're a multimedia enthusiast or professional, invest in the Xperia 1 series for its advanced capabilities.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Performance Needs:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>For Gamers: Look for models with high refresh rates and robust processors.</li>
            <li>For Creatives: Prioritize devices with advanced camera features and high-resolution displays.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Daily Usage:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Heavy Multitaskers: A larger screen and long-lasting battery might be essential.</li>
            <li>Casual Users: A compact, easy-to-handle device could be ideal.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Trade-In Opportunities:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Check for contracts offering trade-in deals to upgrade cost-effectively.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Carrier Offers:</PageText>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Compare different contract plans, data allowances, and bundle deals to ensure you're getting the best overall package.</li>
          </ul>
        </div>
      </div>

      <PageText className="mt-6">
        Remember, the perfect device is the one that fits not only your technical needs but also your lifestyle.
      </PageText>
    </section>
  );
};