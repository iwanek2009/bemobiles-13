import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const MegaMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-primary transition-colors text-base">
            Mobile Phones
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-3 gap-8 p-8 bg-white shadow-lg rounded-lg">
                {/* Mobile Phones Column */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Mobile Phones</h3>
                  <div className="space-y-3">
                    <Link to="/iphone-mobile-phones" className="block text-sm text-gray-600 hover:text-primary transition-colors">iPhone Phone contracts</Link>
                    <Link to="/samsung-mobile-phones" className="block text-sm text-gray-600 hover:text-primary transition-colors">Samsung Phone contracts</Link>
                    <Link to="/google-mobile-phones" className="block text-sm text-gray-600 hover:text-primary transition-colors">Google Phone contracts</Link>
                    <Link to="/sony-mobile-phones" className="block text-sm text-gray-600 hover:text-primary transition-colors">Sony Phone contracts</Link>
                    <Link to="/honor-mobile-phones" className="block text-sm text-gray-600 hover:text-primary transition-colors">Honor Phone contracts</Link>
                  </div>
                </div>

                {/* Popular Mobile Phones Column */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Popular Models</h3>
                  <div className="space-y-3">
                    <Link to="/mobile-phones/iPhone-15-Deals" className="block text-sm text-gray-600 hover:text-primary transition-colors">iPhone 15</Link>
                    <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="block text-sm text-gray-600 hover:text-primary transition-colors">iPhone 15 Pro</Link>
                    <Link to="/mobile-phones/Galaxy-S24-Ultra-Deals" className="block text-sm text-gray-600 hover:text-primary transition-colors">Galaxy S24 Ultra</Link>
                    <Link to="/mobile-phones/Google-Pixel-8-Pro-Deals" className="block text-sm text-gray-600 hover:text-primary transition-colors">Google Pixel 8 Pro</Link>
                    <Link to="/mobile-phones/Galaxy-S24-Plus-Deals" className="block text-sm text-gray-600 hover:text-primary transition-colors">Galaxy S24+</Link>
                  </div>
                </div>

                {/* Special Deals Column */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg mb-4">Special Deals</h3>
                  <div className="space-y-3">
                    <Link to="/mobile-phones/no-upfront-cost" className="block text-sm text-gray-600 hover:text-primary transition-colors">No Upfront Cost Deals</Link>
                    <Link to="/mobile-phones/Phone-contracts-under-£30" className="block text-sm text-gray-600 hover:text-primary transition-colors">Contracts under £30</Link>
                    <Link to="/mobile-phones/Phone-contracts-under-£40" className="block text-sm text-gray-600 hover:text-primary transition-colors">Contracts under £40</Link>
                    <Link to="/mobile-phones/Unlimited-data-iPhone-Deals" className="block text-sm text-gray-600 hover:text-primary transition-colors">Unlimited Data iPhones</Link>
                    <Link to="/mobile-phones/Refurbished-mobile-Phone-contracts" className="block text-sm text-gray-600 hover:text-primary transition-colors">Refurbished Phones</Link>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};