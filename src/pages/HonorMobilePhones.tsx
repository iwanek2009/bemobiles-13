import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";

const HonorMobilePhones = () => {
  useSEO({
    title: "Honor Mobile Phone Deals: Compare Latest Honor Phones & Plans",
    description: "Find the best Honor phone deals and contracts. Compare prices on the latest Honor smartphones and get exclusive offers on monthly plans."
  });

  return (
    <>
      <Header />
      <TheMobile
        title="Honor phone deals."
        description="Innovative smartphones combining style with cutting-edge technology at competitive prices."
        heroImage="/lovable-uploads/df83f3e3-20c0-4ec8-86d9-4bdde97b863d.png"
        imageAlt="Honor smartphone showcasing premium design and features"
        filter={{ brands: [20] }}
        imageProps={{
          loading: "eager",
          fetchPriority: "high",
          width: "800",
          height: "800",
          decoding: "async"
        }}
      />
      <Footer />
    </>
  );
};

export default HonorMobilePhones;