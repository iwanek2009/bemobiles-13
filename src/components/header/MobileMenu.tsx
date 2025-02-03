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
      <SheetContent side="right" className="bg-white">
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
              <Link to="/mobile-phones/no-upfront-cost" className="block text-black hover:text-primary transition-colors text-base">No Upfront Cost</Link>
            </div>
          </div>
          <Link to="#" className="text-black hover:text-primary transition-colors text-lg font-medium">Sim Only</Link>
          <Link to="#" className="text-black hover:text-primary transition-colors text-lg font-medium">Broadband & TV</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};