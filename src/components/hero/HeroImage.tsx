
import { useEffect, useState } from "react";

interface HeroImageProps {
  scrollPosition: number;
}

export const HeroImage = ({ scrollPosition }: HeroImageProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="hidden md:block relative h-[400px] overflow-hidden">
      <img
        src="/lovable-uploads/1f97ee16-02b5-48f8-aa35-82d57b257908.webp"
        alt="Modern smartphones"
        className="absolute w-full object-cover transition-transform duration-300 ease-out"
        style={{
          height: '550px',
          transform: `translateY(${-scrollPosition * 0.2}px)`,
          top: '0'
        }}
        loading="eager"
        decoding="async"
        width="800"
        height="800"
        onError={() => {
          console.error("Image failed to load");
          setImageError(true);
        }}
      />
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Image could not be loaded</p>
        </div>
      )}
    </div>
  );
};
