import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/">
              <img 
                src="/lovable-uploads/76dacefe-9b25-4f6d-9697-bba1e60e81c7.png" 
                alt="Bemobiles" 
                className="h-8"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-black hover:text-primary transition-colors">Home</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Mobile Phones</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[200px]">
                      <Link 
                        to="/mobile-phones" 
                        className="block px-2 py-1 hover:bg-accent rounded-md"
                      >
                        All Phones
                      </Link>
                      <Link 
                        to="/samsung-mobile-phones" 
                        className="block px-2 py-1 hover:bg-accent rounded-md"
                      >
                        Samsung Phones
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link to="#" className="text-black hover:text-primary transition-colors">Sim Only</Link>
            <Link to="#" className="text-black hover:text-primary transition-colors">Broadband & TV</Link>
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
                <Link to="/" className="text-black hover:text-primary transition-colors">Home</Link>
                <Link to="/mobile-phones" className="text-black hover:text-primary transition-colors">Mobile Phones</Link>
                <Link to="/samsung-mobile-phones" className="text-black hover:text-primary transition-colors ml-4">- Samsung Phones</Link>
                <Link to="#" className="text-black hover:text-primary transition-colors">Sim Only</Link>
                <Link to="#" className="text-black hover:text-primary transition-colors">Broadband & TV</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};