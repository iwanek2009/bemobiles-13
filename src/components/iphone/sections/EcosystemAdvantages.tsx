import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const EcosystemAdvantages = () => {
  return (
    <div className="px-4 py-8 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100/20 p-6 md:p-8">
          <PageText variant="h2" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ecosystem Advantages: Why iOS Stands Out
          </PageText>
          
          <div className="space-y-6">
            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText variant="h3" className="text-xl font-semibold mb-4">
                Seamless Integration
              </PageText>
              <PageText>
                From your iPhone to your iPad, Mac, Apple Watch, and even HomePod, the ecosystem works in harmony. For instance, you can start an email on your iPhone and finish it on your Mac effortlessly.
              </PageText>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText variant="h3" className="text-xl font-semibold mb-4">
                Enhanced Security & Privacy
              </PageText>
              <PageText>
                Apple's commitment to privacy ensures your data stays secure, giving you peace of mind as you navigate your digital life.
              </PageText>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText variant="h3" className="text-xl font-semibold mb-4">
                Intuitive User Experience
              </PageText>
              <PageText>
                The simplicity and reliability of iOS mean less time fumbling with settings and more time enjoying your device. Once you experience features like instant Face ID unlocking, you might not want to switch to another ecosystem!
              </PageText>
            </div>

            <div className="bg-blue-50/50 rounded-xl p-6">
              <PageText>
                Of course, if you're considering alternatives, take a peek at offerings like the{" "}
                <Link to="/mobile-phones/Google-Pixel-8-Deals" className="text-primary hover:underline">Google Pixel 8</Link> for its AI-driven camera or{" "}
                <Link to="/mobile-phones/Galaxy-S24-Ultra-Deals" className="text-primary hover:underline">Galaxy S24 Ultra</Link> if you're after customization and innovative features like the S Pen.
              </PageText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};