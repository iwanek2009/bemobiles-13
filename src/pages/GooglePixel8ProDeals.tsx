
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PixelSpecsTable } from "@/components/google/sections/PixelSpecsTable";

const GooglePixel8ProDeals = () => {
  useSEO({
    title: "Google Pixel 8 Pro Deals & Contracts | Compare Premium AI Plans",
    description: "Experience Google Pixel 8 Pro with advanced AI features. Compare flexible monthly plans, unlimited data packages & exclusive network benefits."
  });

  // Add page refresh only on first visit
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('pixel8ProLoaded');
    if (!hasLoaded) {
      sessionStorage.setItem('pixel8ProLoaded', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <>
      <TheMobile
        title="Google Pixel 8 Pro deals"
        description="Explore Monthly Plans Deals for Pixel 8 Pro with AI-Enhanced Features, Unlimited Cloud Storage, and Premium Network Benefits."
        heroImage="/lovable-uploads/c81b964f-826e-4472-a041-be3f38db9484.png"
        imageAlt="Google Pixel 8 Pro in obsidian black showcasing its sleek design"
        filter={{
          families: [1901],
          upfront_price: {
            min: 0,
            max: 0
          }
        }}
        sort="UPFRONT_PRICE"
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />

      <PixelSpecsTable />

      <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Find the Best Google Pixel 8 Pro Deals</h2>

        <div className="space-y-4 text-gray-700">
          <p className="text-lg">Want a Google flagship smartphone while saving a few pounds? Deals from across the UK market in our comparison tool Whatever you want, whether it's an unlimited freedom plan or a cheap deal on contract we've got all the best offers on the biggest networks and retailers right here.</p>

          <p className="text-lg">
            The Pixel 8 Pro is the pinnacle of Google's handset tech, packing incredible AI smarts and a stunning camera system — it's priced from £999 {' '}
            <a 
              href="https://store.google.com/gb/product/pixel_9_pro?hl=en-GB" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              check price on Google Store
            </a>. 
            But for the right deal, you could get this premium device for a fraction of the up-front cost.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Compare Pixel 8 Pro Deals with Us?</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-gray-900">Real-time Price Updates:</span>
              <span className="text-gray-700">Our prices are updated daily to ensure you never miss out on the latest deals</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-gray-900">Transparent Comparison:</span>
              <span className="text-gray-700">See all costs upfront - including monthly payments, setup fees, and total contract value</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-gray-900">Customizable Search:</span>
              <span className="text-gray-700">Filter deals based on your preferred network, contract length, data allowance, and budget</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-gray-900">Verified Offers:</span>
              <span className="text-gray-700">We only list deals from authorized UK retailers and network providers</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-gray-900">Independent Reviews:</span>
              <span className="text-gray-700">Make an informed decision with our unbiased comparison tool</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-lg text-gray-800">Ready to find your perfect Pixel 8 Pro deal? Use our smart comparison tool below to discover the best offers tailored to your needs.</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Other Google Pixel Deals You Might Like</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <Link 
                to="/mobile-phones/Google-Pixel-8-Deals"
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-blue-600 hover:text-blue-800"
              >
                Google Pixel 8 Deals
              </Link>
            </li>
            <li>
              <Link 
                to="/mobile-phones/Google-Pixel-9-Deals"
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-blue-600 hover:text-blue-800"
              >
                Google Pixel 9 Deals
              </Link>
            </li>
            <li>
              <Link 
                to="/mobile-phones/Google-Pixel-9-Pro-Deals"
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-blue-600 hover:text-blue-800"
              >
                Google Pixel 9 Pro Deals
              </Link>
            </li>
            <li>
              <Link 
                to="/mobile-phones/Google-Pixel-9-Pro-Fold-Deals"
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-blue-600 hover:text-blue-800"
              >
                Google Pixel 9 Pro Fold Deals
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default GooglePixel8ProDeals;
