import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const IPhone15Guide = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 mt-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100/20 rounded-2xl p-8">
          <PageText variant="h2" className="mb-6">
            iPhone 15 Deals & Pay Monthly Contracts
          </PageText>
          <PageText variant="h3" className="text-2xl font-semibold text-gray-800 mb-6">
            Your Friendly Guide to the Latest Smartphone Innovations
          </PageText>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Hey there! If you're shopping for a new smartphone, you've probably been bombarded with excitement about the iPhone 15 lineup. So whether you're after the standard{" "}
              <Link to="/mobile-phones/iPhone-15-Deals" className="text-primary hover:text-primary/80 font-medium">
                iPhone 15
              </Link>
              , the bigger{" "}
              <Link to="/mobile-phones/iPhone-15-Plus-Deals" className="text-primary hover:text-primary/80 font-medium">
                iPhone 15 Plus
              </Link>
              , or one of the extra-lush features that arrive with the{" "}
              <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="text-primary hover:text-primary/80 font-medium">
                iPhone 15 Pro
              </Link>
              {" "}and{" "}
              <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="text-primary hover:text-primary/80 font-medium">
                iPhone 15 Pro Max
              </Link>
              {" "}you will have plenty of options open to you that make owning one easier than ever (especially if you're taking a pay monthly contract).
            </p>

            <p>
              This guide will help you compare the models, as well as features, and see how different contracts might fit into your budget and lifestyle. Then we'll casually juxtapose some rival offerings from other brands, like{" "}
              <Link to="/google-mobile-phones" className="text-primary hover:text-primary/80 font-medium">
                Google
              </Link>
              ,{" "}
              <Link to="/samsung-mobile-phones" className="text-primary hover:text-primary/80 font-medium">
                Samsung
              </Link>
              {" "}and{" "}
              <Link to="/sony-mobile-phones" className="text-primary hover:text-primary/80 font-medium">
                Sony
              </Link>
              , so you'll have all the info you'll need to make the best choice possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};