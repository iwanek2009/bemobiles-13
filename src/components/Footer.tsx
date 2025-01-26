import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-100 to-white border-t mt-16">
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
              <a href="#" className="text-gray-600 hover:text-primary">About Bemobiles</a>
              <a href="#" className="text-gray-600 hover:text-primary">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary">Mobile Phones</a>
              <a href="#" className="text-gray-600 hover:text-primary">Sim Only</a>
              <a href="#" className="text-gray-600 hover:text-primary">Broadband & TV</a>
            </nav>
          </div>

          {/* Support Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-primary">Contact Us</a>
              <a href="#" className="text-gray-600 hover:text-primary">FAQs</a>
              <a href="#" className="text-gray-600 hover:text-primary">Help Center</a>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-primary">Cookie Policy</a>
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