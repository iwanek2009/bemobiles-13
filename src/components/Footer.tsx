import { User, Phone, HelpCircle, Info, Shield, FileText, Cookie, Home } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/76dacefe-9b25-4f6d-9697-bba1e60e81c7.png" 
              alt="Bemobiles" 
              className="h-8 mb-4"
            />
            <p className="text-gray-600 text-sm">
              Compare & save on the latest mobile phone deals
            </p>
          </div>

          {/* About Us Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <User className="h-4 w-4" />
                About Bemobiles
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Mobile Phones
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Sim Only
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Broadband & TV
              </a>
            </nav>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQs
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Info className="h-4 w-4" />
                Help Center
              </a>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-primary flex items-center gap-2">
                <Cookie className="h-4 w-4" />
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Bemobiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};