import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";

const SamsungMobilePhones = () => {
  return (
    <>
      <Header />
      <TheMobile
        title="Samsung phone deals."
        description="Discover Samsung's diverse range of smartphones, from premium Galaxy S series to innovative foldables."
        heroImage="/lovable-uploads/7957768e-94f3-4f05-b4fc-1c67cb7ddeab.png"
        imageAlt="Samsung Galaxy S23 smartphone in blue color"
        filter={{ brands: [5] }}
      />
      <Footer />
    </>
  );
};

export default SamsungMobilePhones;