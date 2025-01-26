import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img 
              src="/lovable-uploads/76dacefe-9b25-4f6d-9697-bba1e60e81c7.png" 
              alt="Bemobiles" 
              className="h-8"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">SIM-only</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Broadband</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Help</a>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">SIM-only</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Broadband</a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">Help</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};