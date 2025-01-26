import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, Smartphone, Signal, CreditCard, Clock } from "lucide-react";

export const GuideSection = () => {
  const scrollToPhones = () => {
    const phonesSection = document.querySelector('#phones-section');
    if (phonesSection) {
      phonesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="bg-[#F1F1F1] py-8">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
              <BookOpen className="text-primary w-8 h-8" />
              Finding Your Perfect Phone Contract at bemobiles.com
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Unlock the best mobile phone deal with our expert guide. At bemobiles.com, we help you navigate the essentials of choosing your ideal phone contract.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Smartphone className="text-primary w-6 h-6" />
                    Smart Phone Selection
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose between flagship devices like the iPhone 15 or Samsung S24 based on your preferred features and ecosystem. Our bemobiles.com specialists can guide you through each model's unique capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CheckCircle className="text-primary w-6 h-6" />
                    Usage Requirements
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most modern contracts include unlimited calls and texts, but data needs vary. While unlimited data plans are available through carriers like Vodafone and Three, our bemobiles.com data calculator helps determine your ideal allowance based on streaming, browsing, and app usage patterns.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Signal className="text-primary w-6 h-6" />
                    Coverage Matters
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Before committing to a 24-month contract, verify your chosen network's signal strength in your area. At bemobiles.com, we provide detailed coverage maps for all major UK networks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard className="text-primary w-6 h-6" />
                    Cost Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Balance upfront and monthly payments effectively. Higher initial payments typically reduce monthly costs, while zero-upfront deals offer immediate accessibility with higher monthly installments. At bemobiles.com, we offer transparent pricing across all payment structures.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="text-primary w-6 h-6" />
                    Contract Duration
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose between 12-36 month terms. While longer contracts reduce monthly payments, shorter terms often prove more cost-effective overall. Consider your financial flexibility and commitment preferences when selecting your contract length at bemobiles.com.
                  </p>
                </CardContent>
              </Card>
            </div>

            <button
              onClick={scrollToPhones}
              className="text-lg text-primary hover:text-primary/90 font-medium mt-8 flex items-center gap-2 transition-colors cursor-pointer"
            >
              Ready to find your perfect phone contract? Compare deals and discover the ideal combination of handset, allowances, and payment terms for your needs →
            </button>
          </CardContent>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-6">
            Why Choose a Pay Monthly Phone Contract?
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Discover the smart way to own the latest smartphones with minimal upfront investment through pay monthly contracts. At bemobiles.com, we help you understand exactly what you're getting – and what to watch out for.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Advantages of Pay Monthly Contracts
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Affordable Access to Premium Phones
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Get your dream phone without breaking the bank. Pay monthly contracts let you spread the cost of flagship devices, making premium smartphones instantly accessible with manageable monthly payments.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Enhanced Usage Allowances
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy generous data, call, and text packages that typically surpass pay-as-you-go offerings. Perfect for heavy users who stream, browse, and stay connected throughout the day.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Hassle-Free Payments
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Say goodbye to inconvenient top-ups. Your monthly bill is automatically handled through Direct Debit, ensuring uninterrupted service and better budget management.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Exclusive Rewards
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Many contracts include valuable extras like streaming subscriptions or entertainment packages. At bemobiles.com, we'll help you evaluate whether these perks truly add value to your plan.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Important Considerations
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Long-Term Commitment
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Consider your contract length carefully. Most plans run for 12-36 months, requiring consistent monthly payments throughout the term.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Credit Requirements
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Networks typically require credit checks before approval. We recommend checking your eligibility before applying to avoid disappointment.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    Total Cost Analysis
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    While monthly payments are lower, the overall cost may exceed buying a phone outright. Compare total contract values to make an informed decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};