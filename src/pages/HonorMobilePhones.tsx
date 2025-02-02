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
        heroImage="/lovable-uploads/ce3416ba-a118-4173-9c41-fd8b27198479.png"
        imageAlt="Honor smartphone showcasing premium design and features"
        filter={{ brands: [72] }}
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