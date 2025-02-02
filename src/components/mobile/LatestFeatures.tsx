import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const LatestFeatures = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Latest Releases & Best Features
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Stay ahead of the curve with the hottest new releases:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/iphone-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Apple's iPhone Innovations
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Dynamic Island for an interactive experience</li>
              <li>ProMotion display for smoother visuals</li>
              <li>Enhanced Face ID security</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/google-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Google Pixel Advances
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>AI-powered camera enhancements like Night Sight and Magic Eraser</li>
              <li>Clean Android interface with immediate updates</li>
              <li>Integrated Google Assistant for hands-free control</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/samsung-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Samsung Galaxy Innovations
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Adaptive refresh rates and high-resolution displays</li>
              <li>Foldable designs for a versatile user experience</li>
              <li>Integrated productivity features like Samsung DeX</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/sony-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Sony Xperia Features
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Stunning 4K OLED displays that bring content to life</li>
              <li>Professional-grade cameras for creative photography</li>
              <li>Advanced audio technology for an immersive sound experience</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};