import { manufacturers } from "@/data/manufacturers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CategoryList = () => {
  const getModelLink = (manufacturer: string, modelId: string) => {
    const manufacturerLinks: { [key: string]: string } = {
      'Apple': '/iphone-mobile-phones',
      'Samsung': '/samsung-mobile-phones',
      'Google': '/google-mobile-phones',
      'Sony': '/sony-mobile-phones',
      'Honor': '/honor-mobile-phones'
    };
    
    return `${manufacturerLinks[manufacturer]}?filter=${modelId}`;
  };

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
                {manufacturer.models.map((model) => (
                  <Link
                    key={model.id}
                    to={getModelLink(manufacturer.name, model.id)}
                    className="block"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="flex items-center justify-between p-2 hover:bg-accent rounded-lg transition-colors">
                      <div>
                        <h4 className="font-medium">{model.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          From £{model.price.monthly}/month
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};