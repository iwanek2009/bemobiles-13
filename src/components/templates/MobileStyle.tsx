import { ReactNode } from "react";

interface HeroTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  children?: ReactNode;
}

export const HeroTemplate = ({
  title,
  description,
  heroImage,
  children
}: HeroTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
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
                alt={title}
                className="absolute inset-0 w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default HeroTemplate;