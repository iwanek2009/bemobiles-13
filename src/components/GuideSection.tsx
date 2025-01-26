import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const GuideSection = () => {
  const scrollToPhones = () => {
    const phonesSection = document.querySelector('#phones-section');
    if (phonesSection) {
      phonesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-900 tracking-tight mb-6">
            Finding Your Perfect Phone Contract at bemobiles.com
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Unlock the best mobile phone deal with our expert guide. At bemobiles.com, we help you navigate the essentials of choosing your ideal phone contract.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Smart Phone Selection</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose between flagship devices like the iPhone 15 or Samsung S24 based on your preferred features and ecosystem. Our bemobiles.com specialists can guide you through each model's unique capabilities.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Usage Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                Most modern contracts include unlimited calls and texts, but data needs vary. While unlimited data plans are available through carriers like Vodafone and Three, our bemobiles.com data calculator helps determine your ideal allowance based on streaming, browsing, and app usage patterns.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Coverage Matters</h3>
              <p className="text-gray-600 leading-relaxed">
                Before committing to a 24-month contract, verify your chosen network's signal strength in your area. At bemobiles.com, we provide detailed coverage maps for all major UK networks.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cost Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Balance upfront and monthly payments effectively. Higher initial payments typically reduce monthly costs, while zero-upfront deals offer immediate accessibility with higher monthly installments. At bemobiles.com, we offer transparent pricing across all payment structures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Contract Duration</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose between 12-36 month terms. While longer contracts reduce monthly payments, shorter terms often prove more cost-effective overall. Consider your financial flexibility and commitment preferences when selecting your contract length at bemobiles.com.
              </p>
            </div>

            <button
              onClick={scrollToPhones}
              className="text-lg text-primary hover:text-primary/90 font-medium mt-8 flex items-center gap-2 transition-colors cursor-pointer"
            >
              Ready to find your perfect phone contract? Compare deals and discover the ideal combination of handset, allowances, and payment terms for your needs →
            </button>
          </div>
        </CardContent>
      </div>
    </div>
  );
};
