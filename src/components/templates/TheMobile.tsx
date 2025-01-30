import { StickeeWidget } from "@/components/StickeeWidget";
import { PageText } from "@/components/ui/page-text";

interface TheMobileProps {
  title: string;
  description: string;
  heroImage: string;
  imageAlt: string;
  filter?: {
    families?: number[];
    brands?: number[];
  };
}

export const TheMobile = ({ title, description, heroImage, imageAlt, filter }: TheMobileProps) => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <PageText variant="h1" className="text-4xl md:text-5xl lg:text-6xl">
              {title}
            </PageText>
            <PageText className="text-lg md:text-xl text-gray-600">
              {description}
            </PageText>
          </div>
          <div className="flex-1">
            <img
              src={heroImage}
              alt={imageAlt}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div id="phones-section" className="mt-16">
          <StickeeWidget filter={filter} />
        </div>
      </div>
    </div>
  );
};