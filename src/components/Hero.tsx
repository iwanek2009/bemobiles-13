import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
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
              src="/lovable-uploads/9437e5c2-7f3c-4940-962c-813c9639a88c.png"
              alt="Person with phone"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};