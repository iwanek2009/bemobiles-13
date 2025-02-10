
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";

const iPhone15PlusDeals = () => {
  useSEO({
    title: "iPhone 15 Plus Deals & Contracts | Compare Large Screen iPhone Plans",
    description: "Explore iPhone 15 Plus with superior screen size and performance. Compare flexible monthly plans, unlimited data packages & exclusive network perks."
  });

  return (
    <>
      <TheMobile
        title="iPhone 15 Plus deals."
        description="Find Unbeatable Monthly Plans for iPhone 15 Plus with Zero Upfront Cost Options, Unlimited Data Packages, and Exclusive Network Benefits."
        heroImage="/lovable-uploads/be7d1c03-10f4-4284-82e1-92b891a5fdf4.png"
        imageAlt="iPhone 15 Plus showcasing its larger display and features"
        filter={{ families: [1891] }}
        sort="UPFRONT_PRICE"
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">How do you choose Best iPhone 15 Plus deals</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Looking for a larger iPhone experience without the Pro price tag? The iPhone 15 Plus combines a spacious 6.7-inch display with impressive battery life at a more accessible price point. We've partnered with leading UK networks and resellers to bring you comprehensive deals, including exclusive offers you won't find on standard provider websites.
            </p>
            
            <p className="text-gray-600">
              The iPhone 15 Plus stands out with its large Super Retina XDR display, advanced 48MP camera system, and exceptional battery performance that can last up to 26 hours of video playback. Browse through our selection of deals, filter by data packages, network preferences, and payment terms to find a contract that matches your budget.
            </p>
            
            <p className="text-gray-600">
              Find more details about iPhone 15 Plus on the <a href="https://www.apple.com/uk/shop/buy-iphone/iphone-15" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">official Apple Store</a>.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Looking for other iPhone models? Compare deals for the {' '}
                <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="text-blue-600 hover:underline">iPhone 15 Pro Max</Link>, {' '}
                <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="text-blue-600 hover:underline">iPhone 15 Pro</Link>, {' '}
                <Link to="/mobile-phones/iPhone-16-Deals" className="text-blue-600 hover:underline">iPhone 16</Link> and {' '}
                <Link to="/mobile-phones/iPhone-16-Pro-Deals" className="text-blue-600 hover:underline">iPhone 16 Pro</Link>, or view {' '}
                <Link to="/mobile-phones/iphone-deals" className="text-blue-600 hover:underline">all iPhone deals</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Available iPhone 15 Plus Deals & Contract Offers</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              Looking for an iPhone 15 Plus contract? Our smart comparison tool helps you find exactly what you need. Filter through a wide range of options including:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Data packages from 1GB to unlimited data</li>
              <li>
                Plans from major networks like {' '}
                <a href="https://www.o2.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">O2</a>, {' '}
                <a href="https://www.vodafone.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vodafone</a>, {' '}
                <a href="https://www.sky.com/shop/mobile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Sky Mobile</a>, and {' '}
                <a href="https://www.idmobile.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">iD Mobile</a>
              </li>
              <li>Choice between new and refurbished phones</li>
              <li>Available colors: Pink, Yellow, Green, Blue, and Black</li>
              <li>Storage options: 128GB, 256GB, and 512GB</li>
              <li>Options with no upfront cost available</li>
            </ul>
            
            <p className="text-gray-600">
              Whether you're looking for a plan with unlimited minutes and texts, or a specific data allowance, our platform lets you compare and find the most competitive iPhone 15 Plus deals from UK providers today.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Why Choose the iPhone 15 Plus?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Design and Display</h3>
              <p className="text-gray-600">
                The iPhone 15 Plus delivers a premium experience with its expansive 6.7-inch Super Retina XDR display - the same size as the Pro Max, but at a more accessible price point. The durable aluminum design combined with Ceramic Shield makes it both stylish and robust. Dynamic Island keeps your notifications and activities easily visible.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Camera Excellence</h3>
              <p className="text-gray-600">
                Experience a major upgrade with the 48MP main camera, which captures stunning detail in every shot. The advanced camera system brings you improved Portrait mode with Focus and Depth Control, plus the next generation of HDR photos with Smart HDR 5. Perfect for capturing life's moments in vivid detail.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Performance and Battery</h3>
              <p className="text-gray-600">
                Powered by the A16 Bionic chip, the iPhone 15 Plus handles everything from everyday tasks to intensive gaming with ease. The larger size accommodates a bigger battery, offering exceptional life that can last up to 26 hours of video playback. Fast charging support gets you to 50% in around 30 minutes.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Additional Premium Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>USB-C connectivity for universal charging and faster data transfer</li>
                <li>5G capabilities for ultra-fast mobile data</li>
                <li>Enhanced security with Face ID</li>
                <li>MagSafe charging compatibility</li>
                <li>Improved satellite connectivity for emergencies</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default iPhone15PlusDeals;
