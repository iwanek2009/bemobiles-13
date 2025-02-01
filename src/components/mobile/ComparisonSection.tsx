import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const ComparisonSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="mb-6">
            Comparisons & Competitors
          </PageText>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PageText variant="h3" className="mb-4">
                For Photography Enthusiasts
              </PageText>
              <p className="text-gray-600">
                While <Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhones</Link> deliver excellent security and a smooth user experience, <Link to="/google-mobile-phones" className="text-primary hover:underline">Google's Pixel phones</Link> excel in AI-driven photography.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PageText variant="h3" className="mb-4">
                For Gamers & Multitaskers
              </PageText>
              <p className="text-gray-600">
                <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung's Galaxy Ultra models</Link> are known for their performance and innovative features like the S Pen, whereas <Link to="/sony-mobile-phones" className="text-primary hover:underline">Sony's Xperia series</Link> offers exceptional display quality and audio performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <PageText variant="h3" className="mb-4">
                For Budget-Conscious Users
              </PageText>
              <p className="text-gray-600">
                Whether it's an older iPhone or a previous-generation Pixel, trade-in offers and budget-friendly contracts allow you to enjoy premium features without overspending.
              </p>
            </div>
          </div>

          <div className="mt-8 text-gray-600">
            <p>
              Comparing these options ensures that you choose a device that not only meets your technical needs but also fits your lifestyle and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};