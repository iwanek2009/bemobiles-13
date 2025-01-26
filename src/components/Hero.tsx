import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
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
          <div className="hidden md:block">
            <img
              src="/lovable-uploads/9d6a7295-3541-4c86-b417-dd0af10760d3.png"
              alt="Latest phones showcase"
              className="w-full h-auto rounded-lg transform transition-transform duration-500"
              style={{
                transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0005})`,
                opacity: 1 - scrollY * 0.002
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};