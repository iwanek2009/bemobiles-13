
import { ChevronRight } from "lucide-react";

export const SamsungModelsSection = () => {
  const models = [
    {
      name: "Galaxy S24",
      description: "The latest Samsung flagship featuring AI-powered features and exceptional everyday performance with a perfect balance of power and efficiency.",
      keyFeatures: ["AI features", "Snapdragon 8 Gen 3", "Advanced camera system"],
      targetUser: "Users seeking the latest technology with great all-round performance",
      url: "/mobile-phones/Galaxy-S24-Deals"
    },
    {
      name: "Galaxy S24+",
      description: "A larger display variant with enhanced features, perfect for those who want a bigger screen without the Ultra's premium features.",
      keyFeatures: ["6.7\" QHD+ display", "Larger battery", "Advanced AI"],
      targetUser: "Users wanting a premium large-screen experience",
      url: "/mobile-phones/Galaxy-S24-Plus-Deals"
    },
    {
      name: "Galaxy S24 Ultra",
      description: "The ultimate Galaxy experience with titanium design, S Pen functionality, and the most advanced camera system in a Samsung smartphone.",
      keyFeatures: ["Titanium build", "S Pen included", "200MP camera"],
      targetUser: "Power users and photography enthusiasts",
      url: "/mobile-phones/Galaxy-S24-Ultra-Deals"
    },
    {
      name: "Galaxy S25",
      description: "Experience the next generation of Galaxy innovation with cutting-edge features and enhanced AI capabilities.",
      keyFeatures: ["Next-gen processor", "Enhanced AI", "Advanced cameras"],
      targetUser: "Early adopters seeking the latest technology",
      url: "/mobile-phones/Galaxy-S25-Deals"
    },
    {
      name: "Galaxy S25+",
      description: "The perfect balance of screen size and premium features, offering an enhanced viewing experience and powerful performance.",
      keyFeatures: ["Large display", "Premium build", "Advanced features"],
      targetUser: "Users wanting a premium large-screen device",
      url: "/mobile-phones/Galaxy-S25-Plus-Deals"
    },
    {
      name: "Galaxy S25 Ultra",
      description: "Samsung's most advanced smartphone, featuring next-generation technology and unparalleled camera capabilities.",
      keyFeatures: ["Ultimate performance", "Pro-grade cameras", "S Pen support"],
      targetUser: "Tech enthusiasts and professional users",
      url: "/mobile-phones/Galaxy-S25-Ultra-Deals"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Compare Samsung Galaxy Models</h2>
      <div className="grid gap-6">
        {models.map((model, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{model.name}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {model.keyFeatures.map((feature, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Best for: {model.targetUser}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a 
                href={model.url}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Compare deals
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <p className="text-sm text-gray-600">
          Compare all options across major UK networks to find the best contract for your needs.
        </p>
      </div>
    </div>
  );
};
