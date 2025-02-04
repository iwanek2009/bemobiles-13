import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <Menu className="h-8 w-8 text-gray-900" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[320px] bg-white p-0">
        <nav className="flex flex-col gap-0">
          <Link to="/" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-50 border-b">
            <span className="flex-1">Home</span>
          </Link>
          
          <Link to="/broadband-tv" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-50 border-b">
            <span className="flex-1">Broadband & TV</span>
            <ChevronDown className="h-5 w-5 text-gray-400 rotate-[-90deg]" />
          </Link>

          <Link to="/sim-only" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-50 border-b">
            <span className="flex-1">SIM only</span>
            <ChevronDown className="h-5 w-5 text-gray-400 rotate-[-90deg]" />
          </Link>

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-normal text-gray-900 px-6 py-4 hover:bg-gray-50 border-b">
              <span className="flex-1">Mobile Phones</span>
              <ChevronDown className="h-5 w-5 text-gray-400 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-b bg-gray-50">
              <Link to="/mobile-phones" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-100">
                <span className="flex-1">All Mobile Phones</span>
              </Link>
              <Link to="/mobile-phones/popular-deals" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-100">
                <span className="flex-1">Popular Deals</span>
              </Link>
              <Link to="/mobile-phones/iphone-deals" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-100">
                <span className="flex-1">Latest iPhone Deals</span>
              </Link>
              <Link to="/mobile-phones/samsung-deals" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-100">
                <span className="flex-1">Latest Samsung Deals</span>
              </Link>
              <Link to="/mobile-phones/google-deals" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-100">
                <span className="flex-1">Latest Google Deals</span>
              </Link>
              <Link to="/mobile-phones/unlimited-data" className="flex items-center px-6 py-4 text-base font-normal text-gray-900 hover:bg-gray-100">
                <span className="flex-1">Unlimited Data Deals</span>
              </Link>
            </CollapsibleContent>
          </Collapsible>
        </nav>
      </SheetContent>
    </Sheet>
  );
};