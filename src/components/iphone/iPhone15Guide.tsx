import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const IPhone15Guide = () => {
  return (
    <div className="mt-12 px-4 py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
          <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            iPhone 15 Deals & Pay Monthly Contracts
          </PageText>
          
          <PageText variant="h3" className="text-2xl font-semibold text-gray-800 mb-4">
            Your Friendly Guide to the Latest Smartphone Innovations
          </PageText>
          
          <div className="space-y-6 text-gray-600">
            <PageText>
              Hey there! If you're shopping for a new smartphone, you've probably been bombarded with excitement about the iPhone 15 lineup. So whether you're after the{" "}
              <Link to="/iphone-15-deals" className="text-primary hover:underline">standard iPhone 15</Link>, the bigger{" "}
              <Link to="/iphone-15-plus-deals" className="text-primary hover:underline">iPhone 15 Plus</Link>, or one of the extra-lush features that arrive with the{" "}
              <Link to="/iphone-15-pro-deals" className="text-primary hover:underline">iPhone 15 Pro</Link> and{" "}
              <Link to="/iphone-15-pro-max-deals" className="text-primary hover:underline">iPhone 15 Pro Max</Link> you will have plenty of options open to you that make owning one easier than ever (especially if you're taking a pay monthly contract).
            </PageText>

            <PageText>
              This guide will help you compare the models, as well as features, and see how different contracts might fit into your budget and lifestyle. Then we'll casually juxtapose some rival offerings from other brands, like{" "}
              <Link to="/google-mobile-phones" className="text-primary hover:underline">Google</Link>,{" "}
              <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung</Link> and{" "}
              <Link to="/sony-mobile-phones" className="text-primary hover:underline">Sony</Link>, so you'll have all the info you'll need to make the best choice possible.
            </PageText>
          </div>
        </div>
      </div>
    </div>
  );
};