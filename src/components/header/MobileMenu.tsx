import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 h-[46px] w-[46px]">
          <Menu className="h-[46px] w-[46px] text-gray-700" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-white overflow-y-auto border-l border-gray-100 p-0">
        <nav className="flex flex-col gap-1.5 p-6">
          <Link to="/" className="text-base text-gray-900 hover:text-primary transition-colors px-4 py-1.5 rounded-lg hover:bg-gray-50">
            Home
          </Link>
          <Separator className="my-1" />

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Mobile Phones
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-0.5 ml-4 border-l-2 border-primary/20">
              <Link to="/iphone-mobile-phones" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone Phone contracts</Link>
              <Link to="/samsung-mobile-phones" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Samsung Phone contracts</Link>
              <Link to="/google-mobile-phones" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Google Phone contracts</Link>
              <Link to="/sony-mobile-phones" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Sony Phone contracts</Link>
              <Link to="/honor-mobile-phones" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Honor Phone contracts</Link>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-1" />

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Popular Deals
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-0.5 ml-4 border-l-2 border-primary/20">
              <Link to="/mobile-phones/no-upfront-cost" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">No Upfront Cost</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£20" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Contracts under £20</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£30" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Contracts under £30</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£40" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Contracts under £40</Link>
              <Link to="/mobile-phones/Phone-contracts-under-£50" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Contracts under £50</Link>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-1" />

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Latest iPhone Deals
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-0.5 ml-4 border-l-2 border-primary/20">
              <Link to="/mobile-phones/iPhone-16-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 16 Deals</Link>
              <Link to="/mobile-phones/iPhone-16-Plus-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 16 Plus Deals</Link>
              <Link to="/mobile-phones/iPhone-16-Pro-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 16 Pro Deals</Link>
              <Link to="/mobile-phones/iPhone-16-Pro-Max-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 16 Pro Max Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 15 Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Plus-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 15 Plus Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Pro-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 15 Pro Deals</Link>
              <Link to="/mobile-phones/iPhone-15-Pro-Max-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 15 Pro Max Deals</Link>
              <Link to="/mobile-phones/iPhone-14-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 14 Deals</Link>
              <Link to="/mobile-phones/iPhone-14-Pro-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone 14 Pro Deals</Link>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-1" />

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Latest Samsung Deals
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-0.5 ml-4 border-l-2 border-primary/20">
              <Link to="/mobile-phones/Galaxy-S24-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Galaxy S24 Deals</Link>
              <Link to="/mobile-phones/Galaxy-S24-Plus-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Galaxy S24+ Deals</Link>
              <Link to="/mobile-phones/Galaxy-S24-Ultra-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Galaxy S24 Ultra Deals</Link>
              <Link to="/mobile-phones/Galaxy-S25-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Galaxy S25 Deals</Link>
              <Link to="/mobile-phones/Galaxy-S25-Plus-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Galaxy S25+ Deals</Link>
              <Link to="/mobile-phones/Galaxy-S25-Ultra-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Galaxy S25 Ultra Deals</Link>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-1" />

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Latest Google Deals
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-0.5 ml-4 border-l-2 border-primary/20">
              <Link to="/mobile-phones/Google-Pixel-8-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Pixel 8 Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-8-Pro-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Pixel 8 Pro Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-9-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Pixel 9 Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-9-Pro-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Pixel 9 Pro Deals</Link>
              <Link to="/mobile-phones/Google-Pixel-9-Pro-Fold-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Pixel 9 Pro Fold Deals</Link>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-1" />

          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium text-gray-900 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Unlimited Data Deals
              <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-0.5 ml-4 border-l-2 border-primary/20">
              <Link to="/mobile-phones/Unlimited-data-iPhone-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">iPhone Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Samsung-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Samsung Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Google-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Google Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Honor-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Honor Unlimited Data</Link>
              <Link to="/mobile-phones/Unlimited-data-Sony-Deals" className="block text-base text-gray-700 hover:text-primary transition-colors px-3 py-2.5 rounded-lg hover:bg-gray-50">Sony Unlimited Data</Link>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-1" />

          <Link to="#" className="text-base text-gray-900 hover:text-primary transition-colors px-4 py-1.5 rounded-lg hover:bg-gray-50">
            Sim Only
          </Link>
          <Separator className="my-1" />

          <Link to="#" className="text-base text-gray-900 hover:text-primary transition-colors px-4 py-1.5 rounded-lg hover:bg-gray-50">
            Broadband & TV
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};