import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const NoUpfrontComparisons = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <PageText variant="h2" className="mb-6">
              Comparisons & Competitors
            </PageText>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Photographers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      <Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhone Pro/Pro Max</Link>: 
                      Excellent for capturing crisp images with advanced editing tools.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      <Link to="/google-mobile-phones" className="text-primary hover:underline">Pixel Pro</Link>: 
                      Unmatched AI-driven camera features and Night Sight.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Gamers and Multitaskers</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>
                      <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung Galaxy Ultra</Link>: 
                      With powerful hardware and large displays, it's built for performance.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>High-end iPhone or Pixel models: Deliver smooth performance and vibrant graphics.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Budget-Conscious Users</h3>
                <p className="text-gray-600">
                  Look for models that strike a balance between cost and functionality, and don't overlook carrier deals that include trade-in bonuses or family plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};