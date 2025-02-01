import { Card, CardContent } from "@/components/ui/card";

export const ContractOptions = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-sm">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Contract Options & Carrier Deals
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            When choosing a smartphone, your contract plan is just as important as the device itself. Here's what to look out for:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Flexible Payment Plans:</h3>
              <p className="text-gray-600">Choose from 24- or 36-month contracts to spread the cost comfortably over time.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Trade-In Offers:</h3>
              <p className="text-gray-600">Upgrade your current phone by trading it in for a discount on your new device, reducing overall expenses.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Bundle Promotions:</h3>
              <p className="text-gray-600">Look for deals that include additional accessories like smartwatches, wireless earbuds, or even data packages.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Carrier Exclusives:</h3>
              <p className="text-gray-600">
                Major UK carriers such as{' '}
                <a href="https://ee.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">EE</a>,{' '}
                <a href="https://www.vodafone.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Vodafone</a>,{' '}
                <a href="https://www.o2.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">O2</a>, and{' '}
                <a href="https://www.three.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Three</a>{' '}
                often offer exclusive perks—extra data, lower upfront costs, or even streaming subscriptions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};