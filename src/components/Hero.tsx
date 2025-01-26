import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

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
    <div className="bg-gradient-to-b from-blue-100 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mobile phone deals
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Looking for a new phone contract? We can help you find your ideal
              handset on a pay monthly plan that suits your needs.
            </p>
            <div className="flex flex-col gap-4">
              <Collapsible
                open={openDeal}
                onOpenChange={setOpenDeal}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center bg-white"
                  >
                    <span>How to choose the best mobile phone deal</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openDeal ? "transform rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white p-4 mt-2 rounded-md">
                  Consider your usage needs, budget, and preferred networks. Compare deals across providers
                  and look for special offers or cashback deals.
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openSim}
                onOpenChange={setOpenSim}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center bg-white"
                  >
                    <span>Should I choose a pay monthly or SIM only deal?</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openSim ? "transform rotate-180" : ""
                      }`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white p-4 mt-2 rounded-md">
                  Pay monthly deals are great if you want a new phone and can spread the cost.
                  SIM only deals are better if you're happy with your current phone and just need data and minutes.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          <div className="hidden md:block relative h-[400px] overflow-hidden">
            <img
              src="/lovable-uploads/1f97ee16-02b5-48f8-aa35-82d57b257908.png"
              alt="Modern smartphones"
              className="absolute w-full object-cover transition-transform duration-300 ease-out"
              style={{
                height: '800px',
                transform: `translateY(${-scrollPosition * 0.2}px)`,
                top: '0'
              }}
              loading="lazy"
              decoding="async"
              width="800"
              height="800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};