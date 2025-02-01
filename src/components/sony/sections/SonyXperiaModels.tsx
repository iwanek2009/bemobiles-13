import { PageText } from "@/components/ui/page-text";

export const SonyXperiaModels = () => {
  return (
    <section>
      <PageText variant="h2">Breaking Down the Xperia Model Variations</PageText>
      <PageText>
        Sony's Xperia lineup caters to a variety of users. Here's a quick look at the key variations:
      </PageText>

      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Sony Xperia 1 Series (Pro Models)</PageText>
          <div className="space-y-4">
            <div>
              <PageText variant="h3" className="text-lg mb-2">Pros:</PageText>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>4K OLED display for stunning visuals</li>
                <li>Advanced camera system with real-time eye autofocus</li>
                <li>Optimized for creative professionals and gamers alike</li>
              </ul>
            </div>
            <div>
              <PageText variant="h3" className="text-lg mb-2">Cons:</PageText>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Premium price point</li>
                <li>May offer more features than needed for casual users</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Sony Xperia 5 Series (Compact & Versatile)</PageText>
          <div className="space-y-4">
            <div>
              <PageText variant="h3" className="text-lg mb-2">Pros:</PageText>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Sleek design with powerful performance</li>
                <li>Great balance of features and portability</li>
                <li>Excellent for everyday use and multimedia</li>
              </ul>
            </div>
            <div>
              <PageText variant="h3" className="text-lg mb-2">Cons:</PageText>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Slightly smaller screen might not appeal to everyone</li>
                <li>Fewer pro-level features compared to the Xperia 1</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <PageText variant="h3">Mid-Range Xperia Models</PageText>
          <div className="space-y-4">
            <div>
              <PageText variant="h3" className="text-lg mb-2">Pros:</PageText>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>More affordable with solid performance</li>
                <li>Ideal for users who want essential features without the high price tag</li>
              </ul>
            </div>
            <div>
              <PageText variant="h3" className="text-lg mb-2">Cons:</PageText>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Lacks some of the premium camera and display capabilities</li>
                <li>Fewer ecosystem perks compared to the high-end models</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PageText className="mt-6">
        Each of these models is backed by competitive contract offers in the UK, making it easier to find one that matches your budget and needs.
      </PageText>
    </section>
  );
};