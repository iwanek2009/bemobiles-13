import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const ModelVariations = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Breaking Down Model Variations
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Smartphones come in various models to suit different needs. Here's a quick look at what to expect from popular brands:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/iphone-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Apple (iPhone)
              </Link>
            </h3>
            <p className="font-medium mb-2">Standard vs. Pro vs. Pro Max:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Standard: Reliable performance, sleek design, and the latest iOS features.</li>
              <li>Pro/Pro Max: Enhanced cameras, larger displays, and superior performance for multitasking and gaming.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/google-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Google (Pixel)
              </Link>
            </h3>
            <p className="font-medium mb-2">Pixel vs. Pixel Pro:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Pixel: Offers a clean Android experience with smart AI features and timely updates.</li>
              <li>Pixel Pro: Boasts advanced camera capabilities like Night Sight and Magic Eraser, perfect for photography enthusiasts.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/samsung-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Samsung (Galaxy)
              </Link>
            </h3>
            <p className="font-medium mb-2">Galaxy vs. Galaxy Ultra:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Galaxy: Delivers a great balance of features and affordability.</li>
              <li>Galaxy Ultra: Packed with high-end specs, foldable tech, and enhanced productivity features like the S Pen.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              <Link to="/sony-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Sony (Xperia)
              </Link>
            </h3>
            <p className="font-medium mb-2">Xperia Models:</p>
            <p className="text-gray-600">
              Ranging from mid-range options with essential features to premium models boasting 4K OLED displays and pro-grade cameras, ideal for creative professionals.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};