
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/76dacefe-9b25-4f6d-9697-bba1e60e81c7.png" 
              alt="Bemobiles" 
              className="h-8 mb-4"
            />
          </div>

          {/* About Us Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-black hover:text-primary">About Bemobiles</a>
              <a href="#" className="text-black hover:text-primary">Home</a>
              <Link to="/best-mobile-phone-deals-southampton" className="text-black hover:text-primary">Mobile Phones</Link>
              <a href="#" className="text-black hover:text-primary">Sim Only</a>
              <a href="#" className="text-black hover:text-primary">Broadband & TV</a>
            </nav>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-black hover:text-primary">Contact Us</a>
              <a href="#" className="text-black hover:text-primary">FAQs</a>
              <a href="#" className="text-black hover:text-primary">Help Center</a>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-black hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-black hover:text-primary">Terms of Service</a>
              <a href="#" className="text-black hover:text-primary">Cookie Policy</a>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center text-black">
          © 2024 Bemobiles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
