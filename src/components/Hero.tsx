import { useEffect, useState } from "react";
import { HeroContent } from "./hero/HeroContent";
import { HeroImage } from "./hero/HeroImage";

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openDeal, setOpenDeal] = useState(false);
  const [openSim, setOpenSim] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#2d92dd]/5 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-4 py-[30px] md:py-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <HeroContent
            openDeal={openDeal}
            setOpenDeal={setOpenDeal}
            openSim={openSim}
            setOpenSim={setOpenSim}
          />
          <HeroImage scrollPosition={scrollPosition} />
        </div>
      </div>
    </div>
  );
};