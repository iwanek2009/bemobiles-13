import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

const SonyMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Sony phone deals."
        description="Experience premium Sony Xperia smartphones with professional-grade cameras and stunning displays."
        heroImage="/lovable-uploads/433be046-89b3-46b5-8c10-cd09ac5c19bc.png"
        imageAlt="Sony Xperia smartphone showcasing professional camera features"
        filter={{ brands: [54] }}
      />
      
      <div className="container mx-auto px-4 py-12 max-w-[800px]">
        <div className="space-y-8">
          <section>
            <PageText variant="h2">Sony Mobile Phone Contract Deals – UK's Best Sony Offers</PageText>
            <PageText>
              If you're on the hunt for a new smartphone deal in the UK, you might already be eyeing the latest from major brands like <Link to="/iphone-mobile-phones" className="text-primary hover:underline">Apple</Link>, <Link to="/google-mobile-phones" className="text-primary hover:underline">Google</Link>, and <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung</Link>. But before you decide, take a moment to explore what Sony has to offer.
            </PageText>
            <PageText>
              Known for its innovative display technology, pro-grade camera systems, and sleek design, Sony's Xperia lineup could be the perfect fit for creative professionals, tech enthusiasts, and anyone looking for a unique Android experience. Let's dive into the world of Sony mobile phone contracts and discover why these deals are turning heads in the UK market.
            </PageText>
          </section>

          <section className="bg-secondary/50 rounded-lg p-8">
            <PageText variant="h3">A Friendly Introduction to Sony's World</PageText>
            <PageText>
              Imagine having a phone that not only captures your best moments in crystal-clear detail but also offers a display so sharp it makes your favourite movies pop. That's the promise of Sony's Xperia range. Whether you're a creative professional or just love high-quality visuals and sound, Sony's smartphone contracts can be tailored to suit your lifestyle. And if you're used to comparing <Link to="/iphone-mobile-phones" className="text-primary hover:underline">iPhone deals</Link>, <Link to="/google-mobile-phones" className="text-primary hover:underline">Pixel deals</Link>, and <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Galaxy deals</Link>, you might find that Sony offers a refreshing alternative with its own unique advantages.
            </PageText>
          </section>

          <section>
            <PageText variant="h2">Breaking Down the Xperia Model Variations</PageText>
            <PageText>
              Sony's Xperia lineup caters to a variety of users. Here's a quick look at the key variations:
            </PageText>

            <div className="space-y-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Sony Xperia 1 Series (Pro Models)</PageText>
                <div className="space-y-4">
                  <div>
                    <PageText variant="h3" className="text-lg mb-2">Pros:</PageText>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>4K OLED display for stunning visuals</li>
                      <li>Advanced camera system with real-time eye autofocus</li>
                      <li>Optimized for creative professionals and gamers alike</li>
                    </ul>
                  </div>
                  <div>
                    <PageText variant="h3" className="text-lg mb-2">Cons:</PageText>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Premium price point</li>
                      <li>May offer more features than needed for casual users</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Sony Xperia 5 Series (Compact & Versatile)</PageText>
                <div className="space-y-4">
                  <div>
                    <PageText variant="h3" className="text-lg mb-2">Pros:</PageText>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Sleek design with powerful performance</li>
                      <li>Great balance of features and portability</li>
                      <li>Excellent for everyday use and multimedia</li>
                    </ul>
                  </div>
                  <div>
                    <PageText variant="h3" className="text-lg mb-2">Cons:</PageText>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Slightly smaller screen might not appeal to everyone</li>
                      <li>Fewer pro-level features compared to the Xperia 1</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Mid-Range Xperia Models</PageText>
                <div className="space-y-4">
                  <div>
                    <PageText variant="h3" className="text-lg mb-2">Pros:</PageText>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>More affordable with solid performance</li>
                      <li>Ideal for users who want essential features without the high price tag</li>
                    </ul>
                  </div>
                  <div>
                    <PageText variant="h3" className="text-lg mb-2">Cons:</PageText>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Lacks some of the premium camera and display capabilities</li>
                      <li>Fewer ecosystem perks compared to the high-end models</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <PageText className="mt-6">
              Each of these models is backed by competitive contract offers in the UK, making it easier to find one that matches your budget and needs.
            </PageText>
          </section>

          <section className="bg-secondary/50 rounded-lg p-8">
            <PageText variant="h2">Latest Releases & Best Features</PageText>
            <PageText>
              Sony continues to push the envelope with its latest Xperia releases. Here's what stands out:
            </PageText>
            
            <div className="space-y-4 mt-6">
              <div className="bg-white rounded-lg p-4">
                <PageText variant="h3" className="text-lg">Stunning 4K OLED Displays</PageText>
                <PageText>Enjoy ultra-clear visuals whether you're streaming your favourite shows or editing photos on the go.</PageText>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <PageText variant="h3" className="text-lg">Pro-Grade Camera Systems</PageText>
                <PageText>Capture breathtaking images with features like real-time eye autofocus and advanced low-light modes. If you love photography or vlogging, you'll appreciate the cinematic video mode.</PageText>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <PageText variant="h3" className="text-lg">Innovative Audio Technology</PageText>
                <PageText>With high-resolution audio support and noise cancellation, your music and calls sound better than ever.</PageText>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <PageText variant="h3" className="text-lg">Gaming & Performance</PageText>
                <PageText>Fast processing and high refresh rate screens mean that gamers and heavy multitaskers get a smooth, responsive experience.</PageText>
              </div>
            </div>

            <PageText className="mt-6">
              These features aren't just buzzwords—they directly improve your daily use, from enhancing your viewing experience to ensuring you capture every important moment with clarity.
            </PageText>
          </section>

          <section className="mt-12">
            <PageText variant="h2">Contract Options & Carrier Deals in the UK</PageText>
            <PageText>
              One of the best parts about choosing a Sony phone in the UK is the variety of contract options available. Here's what to look for:
            </PageText>
            
            <div className="space-y-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Flexible Payment Plans</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Spread the cost over 24 months or more.</li>
                  <li>Enjoy manageable monthly payments that fit your budget.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Trade-In Offers</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Upgrade your device while reducing the overall cost.</li>
                  <li>Check out programs that give you credit for your old phone.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Bundle Promotions</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Combine your phone with accessories like wireless earbuds or smartwatches.</li>
                  <li>Look for family plans that offer savings across multiple lines.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Carrier Exclusives</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Certain deals might include perks like additional data, free streaming subscriptions, or exclusive software features.</li>
                </ul>
                <PageText className="mt-4">
                  Be sure to compare offers from popular UK carriers such as EE, Vodafone, O2, and Three, as many often have exclusive promotions tailored for Sony devices.
                </PageText>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <PageText variant="h2">Ecosystem Perks & Integration</PageText>
            <PageText>
              While Apple's seamless iOS and Google's AI-driven ecosystem get a lot of attention, Sony brings its own set of ecosystem benefits:
            </PageText>

            <div className="space-y-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Integration with Sony Entertainment</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Sync your phone with Sony TVs, audio systems, and even PlayStation consoles.</li>
                  <li>Enjoy a unified multimedia experience whether you're streaming or gaming.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Accessory Compatibility</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Pair your Xperia with high-quality headphones, smartwatches, and cameras designed to work in harmony with Sony's hardware.</li>
                  <li>Benefit from features like remote control for your Sony camera or a dedicated gaming mode.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <PageText variant="h3">Regular Software Updates</PageText>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Stay current with the latest Android features and security enhancements, keeping your device safe and efficient.</li>
                </ul>
                <PageText className="mt-4">
                  These ecosystem perks make the transition into the Sony world smoother and more enjoyable, especially if you're already a fan of Sony's other tech products.
                </PageText>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SonyMobilePhones;
