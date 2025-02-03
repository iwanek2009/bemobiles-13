import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-7 w-7" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white overflow-y-auto">
        <nav className="flex flex-col gap-4 mt-8">
          <Link to="/" className="text-black hover:text-primary transition-colors text-lg font-medium">
            Home
          </Link>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-black">Mobile Phones</p>
            <div className="pl-4 space-y-3 border-l-2 border-primary">
              <Link to="/iphone-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">iPhone Phone contracts</Link>
              <Link to="/samsung-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Samsung Phone contracts</Link>
              <Link to="/google-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Google Phone contracts</Link>
              <Link to="/sony-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Sony Phone contracts</Link>
              <Link to="/honor-mobile-phones" className="block text-black hover:text-primary transition-colors text-base">Honor Phone contracts</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-black">Popular Deals</p>
            <div className="pl-4 space-y-3 border-l-2 border-primary">
              <Link to="/mobile-phones/no-upfront-cost" className="block text-black hover:text-primary transition-colors text-base">No Upfront Cost</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£20" className="block text-black hover:text-primary transition-colors text-base">Contracts under £20</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£30" className="block text-black hover:text-primary transition-colors text-base">Contracts under £30</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£40" className="block text-black hover:text-primary transition-colors text-base">Contracts under £40</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£50" className="block text-black hover:text-primary transition-colors text-base">Contracts under £50</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-black">Latest iPhone Deals</p>
            <div className="pl-4 space-y-3 border-l-2 border-primary">
              <Link to="/mobile-phones/iPhone-15-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone 15 Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Plus-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone 15 Plus Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone 15 Pro Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone 15 Pro Max Deals</Link>
              <Link to="/mobile-phones/iPhone-14-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone 14 Deals</Link>
              <Link to="/mobile-phones/iPhone-14-Pro-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone 14 Pro Deals</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-black">Latest Samsung Deals</p>
            <div className="pl-4 space-y-3 border-l-2 border-primary">
              <Link to="/mobile-phones/Galaxy-S24-Deals" className="block text-black hover:text-primary transition-colors text-base">Galaxy S24 Deals</Link>
              <Link to="/mobile-phones/Galaxy-S24-Plus-Deals" className="block text-black hover:text-primary transition-colors text-base">Galaxy S24+ Deals</Link>
              <Link to="/mobile-phones/Galaxy-S24-Ultra-Deals" className="block text-black hover:text-primary transition-colors text-base">Galaxy S24 Ultra Deals</Link>
              <Link to="/mobile-phones/Galaxy-S25-Deals" className="block text-black hover:text-primary transition-colors text-base">Galaxy S25 Deals</Link>
              <Link to="/mobile-phones/Galaxy-S25-Plus-Deals" className="block text-black hover:text-primary transition-colors text-base">Galaxy S25+ Deals</Link>
              <Link to="/mobile-phones/Galaxy-S25-Ultra-Deals" className="block text-black hover:text-primary transition-colors text-base">Galaxy S25 Ultra Deals</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-black">Latest Google Deals</p>
            <div className="pl-4 space-y-3 border-l-2 border-primary">
              <Link to="/mobile-phones/Google-Pixel-8-Deals" className="block text-black hover:text-primary transition-colors text-base">Pixel 8 Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-8-Pro-Deals" className="block text-black hover:text-primary transition-colors text-base">Pixel 8 Pro Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-9-Deals" className="block text-black hover:text-primary transition-colors text-base">Pixel 9 Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-9-Pro-Deals" className="block text-black hover:text-primary transition-colors text-base">Pixel 9 Pro Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-9-Pro-Fold-Deals" className="block text-black hover:text-primary transition-colors text-base">Pixel 9 Pro Fold Deals</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-black">Unlimited Data Deals</p>
            <div className="pl-4 space-y-3 border-l-2 border-primary">
              <Link to="/mobile-phones/Unlimited-data-iPhone-Deals" className="block text-black hover:text-primary transition-colors text-base">iPhone Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Samsung-Deals" className="block text-black hover:text-primary transition-colors text-base">Samsung Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Google-Deals" className="block text-black hover:text-primary transition-colors text-base">Google Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Honor-Deals" className="block text-black hover:text-primary transition-colors text-base">Honor Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Sony-Deals" className="block text-black hover:text-primary transition-colors text-base">Sony Unlimited Data</Link>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};