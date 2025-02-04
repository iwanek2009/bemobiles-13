import { Card, CardContent } from "@/components/ui/card";

export const GalaxyS25Display = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Display and User Experience
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Dynamic AMOLED Display:</h3>
          <p className="text-gray-600">
            Experience stunning visuals with deep blacks and vibrant colors. The S25's display adapts to your environment to provide optimal brightness and clarity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Adaptive Refresh Rate:</h3>
          <p className="text-gray-600">
            Enjoy silky-smooth scrolling and responsive touch sensitivity whether you're browsing, gaming, or watching videos. This feature dynamically adjusts to content demands, balancing performance and energy efficiency.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Centric Design:</h3>
          <p className="text-gray-600">
            A refined user interface with intuitive navigation and customizable settings ensures that interacting with your device is a delight.
          </p>
        </div>
      </div>
    </div>
  );
};