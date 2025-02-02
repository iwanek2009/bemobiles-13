import { Card, CardContent } from "@/components/ui/card";

export const ContractOptions = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Contract Options & Carrier Deals
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          One of the biggest advantages of these deals is the ability to spread your payments over time. Here's what you need to know:
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Monthly Payment Plans:</h3>
            <p className="text-gray-600">Avoid a large upfront payment by paying a fixed amount each month.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Trade-In Offers:</h3>
            <p className="text-gray-600">Swap your old phone to lower your monthly bill even further.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Carrier Deals:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Bundle promotions that may include accessories like smartwatches or earbuds.</li>
              <li>Family plans that offer multi-line discounts.</li>
              <li>Upgrade programs that let you switch to the latest model each year.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl mt-6">
            <p className="text-blue-800 font-medium">
              Quick tip: Always check if there are additional perks like insurance (think AppleCare+ or Samsung Care+) that can protect your new device.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};