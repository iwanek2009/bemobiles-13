import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#FF4F93] text-white overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find your perfect phone deal
            </h1>
            <p className="text-lg mb-8">
              Ready to save on your next phone contract? We'll help you discover the
              best monthly plans and latest handsets at prices you'll love.
            </p>
            
            <div className="space-y-4">
              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex justify-between items-center w-full bg-white text-black rounded-lg p-4">
                  <span className="text-lg font-medium">How to choose the best mobile phone deal</span>
                  <ChevronDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white/95 text-black p-4 rounded-lg mt-2">
                  <p>Here are some tips to help you choose the best mobile phone deal...</p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="w-full">
                <CollapsibleTrigger className="flex justify-between items-center w-full bg-white text-black rounded-lg p-4">
                  <span className="text-lg font-medium">Should I choose a pay monthly or SIM only deal?</span>
                  <ChevronDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent className="bg-white/95 text-black p-4 rounded-lg mt-2">
                  <p>Learn about the differences between pay monthly and SIM only deals...</p>
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