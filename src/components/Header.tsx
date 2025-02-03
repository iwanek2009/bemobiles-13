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
    <header className="w-full bg-white border-b relative">
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
                    <div className="grid grid-cols-3 gap-6 p-6 w-[800px] bg-white shadow-lg rounded-lg">
                      {/* Mobile Phones Column */}
                      <div>
                        <h3 className="font-semibold mb-3">Mobile Phones</h3>
                        <div className="space-y-2">
                          <Link to="/iphone-mobile-phones" className="block text-sm hover:text-primary">iPhone Phone contracts</Link>
                          <Link to="/samsung-mobile-phones" className="block text-sm hover:text-primary">Samsung Phone contracts</Link>
                          <Link to="/google-mobile-phones" className="block text-sm hover:text-primary">Google Phone contracts</Link>
                          <Link to="/sony-mobile-phones" className="block text-sm hover:text-primary">Sony Phone contracts</Link>
                          <Link to="/honor-mobile-phones" className="block text-sm hover:text-primary">Honor Phone contracts</Link>
                          <Link to="/mobile-phones/no-upfront-cost" className="block text-sm hover:text-primary">No Upfront Cost</Link>
                          <Link to="/mobile-phones/Phone-contracts-under-£20" className="block text-sm hover:text-primary">Phone contracts under £20</Link>
                          <Link to="/mobile-phones/Phone-contracts-under-£30" className="block text-sm hover:text-primary">Phone contracts under £30</Link>
                          <Link to="/mobile-phones/Phone-contracts-under-£40" className="block text-sm hover:text-primary">Phone contracts under £40</Link>
                          <Link to="/mobile-phones/Phone-contracts-under-£50" className="block text-sm hover:text-primary">Phone contracts under £50</Link>
                          <Link to="/mobile-phones/Unlimited-data-iPhone-Deals" className="block text-sm hover:text-primary">Unlimited data iPhone Deals</Link>
                          <Link to="/mobile-phones/Unlimited-data-Samsung-Deals" className="block text-sm hover:text-primary">Unlimited data Samsung Deals</Link>
                          <Link to="/mobile-phones/Unlimited-data-Google-Deals" className="block text-sm hover:text-primary">Unlimited data Google Deals</Link>
                          <Link to="/mobile-phones/Refurbished-mobile-Phone-contracts" className="block text-sm hover:text-primary">Refurbished Phone contracts</Link>
                        </div>
                      </div>

                      {/* Popular Mobile Phones Column */}
                      <div>
                        <h3 className="font-semibold mb-3">Popular Mobile Phones</h3>
                        <div className="space-y-2">
                          <Link to="/mobile-phones/iPhone-15-Deals" className="block text-sm hover:text-primary">iPhone 15 Deals</Link>
                          <Link to="/mobile-phones/iPhone-15-Plus-Deals" className="block text-sm hover:text-primary">iPhone 15 Plus Deals</Link>
                          <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="block text-sm hover:text-primary">iPhone 15 Pro Max Deals</Link>
                          <Link to="/mobile-phones/iPhone-14-Deals" className="block text-sm hover:text-primary">iPhone 14 Deals</Link>
                          <Link to="/mobile-phones/iPhone-14-Pro-Deals" className="block text-sm hover:text-primary">iPhone 14 Pro Deals</Link>
                          <Link to="/mobile-phones/iPhone-13-Deals" className="block text-sm hover:text-primary">iPhone 13 Deals</Link>
                          <Link to="/mobile-phones/Galaxy-S24-Deals" className="block text-sm hover:text-primary">Galaxy S24 Deals</Link>
                          <Link to="/mobile-phones/Galaxy-S24-Plus-Deals" className="block text-sm hover:text-primary">Galaxy S24+ Deals</Link>
                          <Link to="/mobile-phones/Galaxy-S24-Ultra-Deals" className="block text-sm hover:text-primary">Galaxy S24 Ultra Deals</Link>
                          <Link to="/mobile-phones/Google-Pixel-8-Deals" className="block text-sm hover:text-primary">Google Pixel 8</Link>
                          <Link to="/mobile-phones/Google-Pixel-8-Pro-Deals" className="block text-sm hover:text-primary">Google Pixel 8 Pro</Link>
                        </div>
                      </div>

                      {/* Latest Mobile Phones Column */}
                      <div>
                        <h3 className="font-semibold mb-3">Latest Mobile Phones</h3>
                        <div className="space-y-2">
                          <Link to="/mobile-phones/iPhone-16-Deals" className="block text-sm hover:text-primary">iPhone 16 Deals</Link>
                          <Link to="/mobile-phones/iPhone-16-Plus-Deals" className="block text-sm hover:text-primary">iPhone 16 Plus Deals</Link>
                          <Link to="/mobile-phones/iPhone-16-Pro-Deals" className="block text-sm hover:text-primary">iPhone 16 Pro Deals</Link>
                          <Link to="/mobile-phones/iPhone-16-Pro-Max-Deals" className="block text-sm hover:text-primary">iPhone 16 Pro Max Deals</Link>
                          <Link to="/mobile-phones/Galaxy-S25-Deals" className="block text-sm hover:text-primary">Galaxy S25 Deals</Link>
                          <Link to="/mobile-phones/Galaxy-S25-Plus-Deals" className="block text-sm hover:text-primary">Galaxy S25+ Deals</Link>
                          <Link to="/mobile-phones/Galaxy-S25-Ultra-Deals" className="block text-sm hover:text-primary">Galaxy S25 Ultra Deals</Link>
                          <Link to="/mobile-phones/Google-Pixel-9-Deals" className="block text-sm hover:text-primary">Google Pixel 9</Link>
                          <Link to="/mobile-phones/Google-Pixel-9-Pro-Deals" className="block text-sm hover:text-primary">Google Pixel 9 Pro</Link>
                          <Link to="/mobile-phones/Google-Pixel-9-Pro-Fold-Deals" className="block text-sm hover:text-primary">Google Pixel 9 Pro Fold</Link>
                        </div>
                      </div>
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
                    <Link to="/iphone-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">iPhone Phone contracts</Link>
                    <Link to="/samsung-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Samsung Phone contracts</Link>
                    <Link to="/google-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Google Phone contracts</Link>
                    <Link to="/sony-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Sony Phone contracts</Link>
                    <Link to="/honor-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Honor Phone contracts</Link>
                    <Link to="/mobile-phones/no-upfront-cost" className="block text-black hover:text-primary transition-colors text-base">No Upfront Cost</Link>
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