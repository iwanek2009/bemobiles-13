import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-black hover:text-primary transition-colors text-base">Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-black hover:text-primary transition-colors text-base">
                    Mobile Phones
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[200px]">
                      <Link 
                        to="/mobile-phones" 
                        className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-base"
                      >
                        All Phones
                      </Link>
                      <Link 
                        to="/iphone-mobile-phones" 
                        className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-base"
                      >
                        iPhone
                      </Link>
                      <Link 
                        to="/samsung-mobile-phones" 
                        className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-base"
                      >
                        Samsung
                      </Link>
                      <Link 
                        to="/google-mobile-phones" 
                        className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-base"
                      >
                        Google
                      </Link>
                      <Link 
                        to="/sony-mobile-phones" 
                        className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-base"
                      >
                        Sony
                      </Link>
                      <Link 
                        to="/honor-mobile-phones" 
                        className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-base"
                      >
                        Honor
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="#" className="text-black hover:text-primary transition-colors text-base">Sim Only</Link>
            <Link to="#" className="text-black hover:text-primary transition-colors text-base">Broadband & TV</Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-black hover:text-primary transition-colors text-lg font-medium">Home</Link>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-black">Mobile Phones</p>
                  <div className="pl-4 space-y-3 border-l-2 border-primary">
                    <Link to="/mobile-phones" className="block text-black hover:text-primary transition-colors text-base">All Phones</Link>
                    <Link to="/iphone-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">iPhone</Link>
                    <Link to="/samsung-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Samsung</Link>
                    <Link to="/google-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Google</Link>
                    <Link to="/sony-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Sony</Link>
                    <Link to="/honor-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Honor</Link>
                  </div>
                </div>
                <Link to="#" className="text-black hover:text-primary transition-colors text-lg font-medium">Sim Only</Link>
                <Link to="#" className="text-black hover:text-primary transition-colors text-lg font-medium">Broadband & TV</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};