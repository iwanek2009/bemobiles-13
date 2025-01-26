import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="What phone are you looking for?" className="flex-1" />
              <Button>Search Deals</Button>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};