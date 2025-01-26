import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <img 
              src="/lovable-uploads/76dacefe-9b25-4f6d-9697-bba1e60e81c7.png" 
              alt="Bemobiles" 
              className="h-8"
            />
          </div>
          
          <nav className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">SIM-only</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Broadband</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Help</a>
          </nav>

          <div className="relative w-full md:w-auto">
            <Input 
              type="search" 
              placeholder="Search phones..." 
              className="pl-10 w-full md:w-[300px]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};