
import { manufacturers } from "@/data/manufacturers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CategoryList = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1000px]">
      <h2 className="text-2xl font-bold mb-6">Browse by Manufacturer</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {manufacturers.map((manufacturer) => (
          <Card key={manufacturer.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {manufacturer.name}
              </CardTitle>
              <CardDescription>{manufacturer.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {manufacturer.models.map((model) => {
                  let linkPath = "#";
                  
                  // Map specific model names to their routes
                  switch(model.name) {
                    case "iPhone 15":
                      linkPath = "/mobile-phones/iPhone-15-Deals";
                      break;
                    case "Galaxy S25":
                      linkPath = "/mobile-phones/Galaxy-S25-Deals";
                      break;
                    case "Galaxy S24 Ultra":
                      linkPath = "/mobile-phones/Galaxy-S24-Ultra-Deals";
                      break;
                    case "Pixel 9 Pro":
                      linkPath = "/mobile-phones/Google-Pixel-9-Pro-Deals";
                      break;
                    case "Xperia 1 VI":
                      linkPath = "/sony-mobile-phones";
                      break;
                    case "Honor 200 Pro":
                      linkPath = "/honor-mobile-phones";
                      break;
                    default:
                      linkPath = "#";
                  }

                  return (
                    <Link
                      key={model.id}
                      to={linkPath}
                      className="block"
                    >
                      <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg transition-colors">
                        <div>
                          <h4 className="font-medium">{model.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            From £{model.price.monthly.toFixed(2)}/month
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
