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
          Each smartphone brand offers its own ecosystem, enhancing the overall user experience:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/iphone-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Apple Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Seamless integration with devices like the Apple Watch, AirPods, and MacBook.</li>
              <li>Consistent iOS updates ensure security and new features.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/google-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Google Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Effortless synchronization with Google services (Gmail, Google Photos, Drive) and smart home devices.</li>
              <li>A clean Android experience with direct updates from Google.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/samsung-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Samsung Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Robust integration with Galaxy tablets, smartwatches, and even home appliances through SmartThings.</li>
              <li>Additional productivity features like Samsung DeX.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              <Link to="/sony-mobile-phones" className="text-blue-600 hover:text-blue-800">
                Sony Ecosystem:
              </Link>
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Unmatched multimedia experience through integration with Sony TVs, audio systems, and PlayStation.</li>
              <li>Accessory compatibility that enhances both entertainment and productivity.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-600 mt-6">
          These ecosystem advantages are key when deciding which brand aligns best with your digital lifestyle.
        </p>
      </CardContent>
    </Card>
  );
};