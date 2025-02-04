import { Card, CardContent } from "@/components/ui/card";

export const GalaxyS25Features = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Feature Breakdown: Galaxy S25 vs. The Competition
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            1. Camera Capabilities
          </h3>
          <p className="text-gray-600 mb-6">
            The Samsung Galaxy S25 is engineered to satisfy even the most demanding photography enthusiasts:
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Advanced Sensor Technology:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Capture ultra-high-resolution images that reveal every detail.</li>
                <li>Features an innovative sensor that adapts to various lighting conditions, ensuring crisp shots whether you're in bright daylight or low-light settings.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pro-Grade Camera Modes:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Night Mode: Just like the renowned Night Sight on the Google Pixel 8 Pro, the S25's Night Mode lets you shoot stunning low-light photos with minimal noise.</li>
                <li>AI-Powered Enhancements: Utilize smart algorithms to automatically adjust settings for optimal clarity and color accuracy.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Versatile Lens Array:</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Multiple lenses (wide, ultra-wide, and telephoto) provide creative freedom for every scenario—from sweeping landscapes to detailed portraits.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};