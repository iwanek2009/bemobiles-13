import { Card, CardContent } from "@/components/ui/card";

export const GalaxyS25Performance = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Battery Life and Performance
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-Lasting Battery:</h3>
          <p className="text-gray-600">
            Designed to power through heavy usage—from streaming your favorite shows to intensive gaming sessions—without constant recharging.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Charging and Wireless Power:</h3>
          <p className="text-gray-600">
            Enjoy quick power-ups with ultra-fast charging capabilities and the convenience of wireless charging.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Power Management:</h3>
          <p className="text-gray-600">
            Adaptive battery software learns your usage patterns and optimizes power distribution accordingly, similar to what you might see with Google's AI optimization in the Pixel series.
          </p>
        </div>
      </div>
    </div>
  );
};