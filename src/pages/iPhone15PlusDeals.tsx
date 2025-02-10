import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 focus:outline-none"
      >
        <span className="font-medium text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 pr-8">{answer}</p>
      </div>
    </div>
  );
};

const iPhone15PlusDeals = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useSEO({
    title: "iPhone 15 Plus Deals & Contracts | Compare Large Screen iPhone Plans",
    description: "Explore iPhone 15 Plus with superior screen size and performance. Compare flexible monthly plans, unlimited data packages & exclusive network perks."
  });

  const faqs = [
    {
      question: "Should you go for the iPhone 15 Plus over the standard iPhone 15, and is the additional cost justified?",
      answer: "The iPhone 15 Plus has a lot of advantages over the regular model: a much larger 6.7-inch screen that's great for streaming and gaming, substantially longer battery life (up to 26 hours of video playback) and a much more immersive experience for everyday use. For those who prioritize screen real estate and longer battery life, the Plus model offers tremendous value."
    },
    {
      question: "How does iPhone 15 Plus battery life stack up against other models?",
      answer: "The biggest, most productive iPhone in the range -- up to 26 hours of video playback and 100 hours of audio playback. It bests the regular iPhone 15 and comes close to the Pro Max model, which makes it a fantastic option for heavy users who want great battery life without the Pro price."
    },
    {
      question: "Will my old iPhone case work with iPhone 15 Plus?",
      answer: "Thanks to the new USB-C port, not to mention slightly different dimensions, cases from older iPhone models won't fit the iPhone 15 Plus. The case will have to be dedicated to this model, but there will be plenty of them available, as many manufacturers have already come up with their designs."
    },
    {
      question: "Which storage size for iPhone 15 Plus should I choose?",
      answer: "The iPhone 15 Plus is available in 128GB, 256GB, and 512GB options. 128GB is more than enough for apps, photos, and a few footages for most users. But if you take numerous photos or 4K video, choose the 256GB model. The 512GB model is for those who keep a large media library or use their phone for content creation."
    },
    {
      question: "Are the cameras on the iPhone 15 Plus the same as the Pro models?",
      answer: "While the iPhone 15 Plus packs the main camera with 48MP resolution and many advanced features such as Smart HDR 5 and improved Portrait mode, it lacks a telephoto lens like the Pro models. However, for the majority of photography needs, from social media to portraits to everyday shots, the Plus produces excellent quality photos."
    },
    {
      question: "Which Colors are Offered with iPhone 15 Plus?",
      answer: "The iPhone 15 Plus is available in Pink, Yellow, Green, Blue, and Black. These finishes are available with a refined matte texture that looks sleek and is resistant to fingerprints."
    },
    {
      question: "Can you get iPhone 15 Plus contracts with no up front cost?",
      answer: "Yes, there are a number of iPhone 15 Plus deals in the UK that do not require an upfront cost. Though these contracts usually come with bigger monthly payments, they lower the barrier to entry if you want the latest iPhone but don't want to spend a lot upfront."
    },
    {
      question: "What kinds of charging does the iPhone 15 Plus support?",
      answer: "The iPhone 15 Plus gives you the same USB-C port introduction, with universal charging, fast charging (50% in 30 minutes with a 20W adapter) and wireless charging with MagSafe charging up to 15W."
    }
  ];

  const scrollToWidget = () => {
    const widget = document.querySelector('[data-stickee-widget-id]');
    if (widget) {
      widget.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <Link to="/iphone-mobile-phones" className="text-blue-600 hover:underline">all iPhone deals</Link>.
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

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">iPhone 15 Plus FAQs</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-b from-blue-50 to-white py-12 rounded-lg">
          <div className="text-center space-y-6 px-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Get Your Perfect iPhone 15 Plus Deal Today
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to experience the bigger screen and longer battery life? Compare the latest iPhone 15 Plus deals from major UK networks starting from £40 per month, with options for no upfront cost. Find the perfect balance of data, cost, and features.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                onClick={scrollToWidget}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-auto"
              >
                Compare iPhone 15 Plus Deals
              </Button>
              <Link to="/iphone-mobile-phones">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 h-auto"
                >
                  View All iPhone Deals
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default iPhone15PlusDeals;
