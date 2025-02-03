import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { manufacturers } from "@/data/manufacturers";

export const MegaMenu = () => {
  // Get current and upcoming phones from manufacturers data
  const currentPhones = manufacturers.flatMap(manufacturer => 
    manufacturer.models
      .filter(model => new Date(model.releaseDate) <= new Date())
      .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
      .slice(0, 5)
  );

  const upcomingPhones = manufacturers.flatMap(manufacturer => 
    manufacturer.models
      .filter(model => new Date(model.releaseDate) > new Date())
      .sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime())
      .slice(0, 5)
  );

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-primary transition-colors text-base">
            Mobile Phones
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="absolute left-0 top-full w-full bg-white">
              <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-6 p-6 bg-white shadow-lg rounded-lg">
                  {/* Manufacturers Column */}
                  <div>
                    <h3 className="font-semibold mb-3">Phone Manufacturers</h3>
                    <div className="space-y-2">
                      <Link to="/iphone-mobile-phones" className="block text-sm hover:text-primary">iPhone Phones</Link>
                      <Link to="/samsung-mobile-phones" className="block text-sm hover:text-primary">Samsung Phones</Link>
                      <Link to="/google-mobile-phones" className="block text-sm hover:text-primary">Google Phones</Link>
                      <Link to="/sony-mobile-phones" className="block text-sm hover:text-primary">Sony Phones</Link>
                      <Link to="/honor-mobile-phones" className="block text-sm hover:text-primary">Honor Phones</Link>
                    </div>

                    <h3 className="font-semibold mb-3 mt-6">Special Deals</h3>
                    <div className="space-y-2">
                      <Link to="/mobile-phones/no-upfront-cost" className="block text-sm hover:text-primary">No Upfront Cost Phones</Link>
                      <Link to="/mobile-phones/Phone-contracts-under-£20" className="block text-sm hover:text-primary">Contracts under £20</Link>
                      <Link to="/mobile-phones/Phone-contracts-under-£30" className="block text-sm hover:text-primary">Contracts under £30</Link>
                      <Link to="/mobile-phones/Phone-contracts-under-£40" className="block text-sm hover:text-primary">Contracts under £40</Link>
                      <Link to="/mobile-phones/Phone-contracts-under-£50" className="block text-sm hover:text-primary">Contracts under £50</Link>
                    </div>
                  </div>

                  {/* Current Phones Column */}
                  <div>
                    <h3 className="font-semibold mb-3">Latest Phones</h3>
                    <div className="space-y-2">
                      {currentPhones.map(phone => (
                        <Link 
                          key={phone.id}
                          to={`/mobile-phones/${phone.slug}-Deals`} 
                          className="block text-sm hover:text-primary"
                        >
                          {phone.name} Deals
                        </Link>
                      ))}
                    </div>

                    <h3 className="font-semibold mb-3 mt-6">Unlimited Data Deals</h3>
                    <div className="space-y-2">
                      <Link to="/mobile-phones/Unlimited-data-iPhone-Deals" className="block text-sm hover:text-primary">Unlimited iPhone Data</Link>
                      <Link to="/mobile-phones/Unlimited-data-Samsung-Deals" className="block text-sm hover:text-primary">Unlimited Samsung Data</Link>
                      <Link to="/mobile-phones/Unlimited-data-Google-Deals" className="block text-sm hover:text-primary">Unlimited Google Data</Link>
                    </div>
                  </div>

                  {/* Upcoming Phones Column */}
                  <div>
                    <h3 className="font-semibold mb-3">Coming Soon</h3>
                    <div className="space-y-2">
                      {upcomingPhones.map(phone => (
                        <Link 
                          key={phone.id}
                          to={`/mobile-phones/${phone.slug}-Deals`} 
                          className="block text-sm hover:text-primary"
                        >
                          {phone.name} Pre-Order
                        </Link>
                      ))}
                    </div>
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