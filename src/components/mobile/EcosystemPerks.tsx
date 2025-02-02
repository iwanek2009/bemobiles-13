import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const EcosystemPerks = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ecosystem Perks
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Choosing a phone isn't just about the device itself—it's about the whole ecosystem:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/iphone-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Apple's Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Seamless integration between your iPhone, iPad, Mac, and Apple Watch.</li>
              <li>Enjoy features like AirDrop, FaceTime, and iMessage.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/google-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Google's Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access to AI-driven features like Google Assistant and cloud storage.</li>
              <li>Perfect for those who rely on Google services for work and play.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/samsung-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Samsung's Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Enjoy interconnected devices with the S Pen, Galaxy Watch, and Samsung DeX.</li>
              <li>Great for users who appreciate customization and productivity on the go.</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mt-8">
          <p className="text-gray-700 italic">
            Real-life example: One user switched from Android to iOS and loved the instant Face ID unlock—a small change that made a big difference in their daily routine.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};