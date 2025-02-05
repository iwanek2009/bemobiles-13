
import { StickeeWidget } from "@/components/StickeeWidget";
import { Header } from "@/components/Header";
import { ReactNode } from "react";

interface TheMobileProps {
  title: string;
  description: string;
  heroImage: string;
  imageAlt: string;
  filter?: {
    families?: number[];
    brands?: number[];
    upfront_price?: {
      min: number;
      max: number;
    };
  };
  basic?: boolean;
  sort?: string;
  imageProps?: {
    loading?: "eager" | "lazy";
    fetchPriority?: "high" | "low" | "auto";
    width?: string;
    height?: string;
    decoding?: "async" | "sync" | "auto";
  };
  children?: ReactNode;
}

export const TheMobile = ({
  title,
  description,
  heroImage,
  imageAlt,
  filter,
  basic,
  sort,
  imageProps,
  children
}: TheMobileProps) => {
  return (
    <div className="bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#2990dd]/50 to-white">
        <div className="container mx-auto px-4 pb-0 pt-16 md:py-0">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                {description}
              </p>
            </div>
            <div className="relative h-[300px] md:h-[320px] w-full md:mt-5">
              <img
                src={heroImage}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-contain"
                {...imageProps}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="phones-section">
        <StickeeWidget filter={filter} basic={basic} sort={sort} />
      </div>

      {children}
    </div>
  );
};

export default TheMobile;

