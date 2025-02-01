import { PageText } from "@/components/ui/page-text";
import { Link } from "react-router-dom";

export const SonyIntroduction = () => {
  return (
    <section>
      <PageText variant="h2">Sony Mobile Phone Contract Deals – UK's Best Sony Offers</PageText>
      <PageText>
        If you're on the hunt for a new smartphone deal in the UK, you might already be eyeing the latest from major brands like <Link to="/iphone-mobile-phones" className="text-primary hover:underline">Apple</Link>, <Link to="/google-mobile-phones" className="text-primary hover:underline">Google</Link>, and <Link to="/samsung-mobile-phones" className="text-primary hover:underline">Samsung</Link>. But before you decide, take a moment to explore what Sony has to offer.
      </PageText>
      <PageText>
        Known for its innovative display technology, pro-grade camera systems, and sleek design, Sony's Xperia lineup could be the perfect fit for creative professionals, tech enthusiasts, and anyone looking for a unique Android experience. Let's dive into the world of Sony mobile phone contracts and discover why these deals are turning heads in the UK market.
      </PageText>
    </section>
  );
};