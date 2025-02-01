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
              Imagine having a phone that not only captures your best moments in crystal-clear detail but also offers a display so sharp it makes your favourite movies pop. That's the promise of Sony's Xperia range. Whether you're a creative professional or just love high-quality visuals and sound, Sony's smartphone contracts can be tailored to suit your lifestyle. And if you're used to comparing iPhone deals, Pixel deals, and Galaxy deals, you might find that Sony offers a refreshing alternative with its own unique advantages.
            </PageText>
          </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SonyMobilePhones;