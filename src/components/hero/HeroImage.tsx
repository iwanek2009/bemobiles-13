import { useEffect, useState } from "react";

interface HeroImageProps {
  scrollPosition: number;
}

export const HeroImage = ({ scrollPosition }: HeroImageProps) => {
  return (
    <div className="block md:hidden lg:block relative h-[400px] overflow-hidden">
      <img
        src="/lovable-uploads/1f97ee16-02b5-48f8-aa35-82d57b257908.png"
        alt="Modern smartphones"
        className="absolute w-full object-cover transition-transform duration-300 ease-out"
        style={{
          height: '550px',
          transform: `translateY(${-scrollPosition * 0.2}px)`,
          top: '0'
        }}
        loading="lazy"
        decoding="async"
        width="800"
        height="800"
      />
    </div>
  );
};