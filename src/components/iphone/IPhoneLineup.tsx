import { PageText } from "@/components/ui/page-text";

export const IPhoneLineup = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <PageText variant="h2" className="mb-6">
          Exploring the iPhone Lineup
        </PageText>
        
        <PageText className="mb-8">
          Apple refreshes its iPhone family each year, offering a range of models to suit different needs and budgets. Whether you need a reliable everyday companion, an ultra-powerful camera phone, or a phablet-like experience, there's an iPhone for you.
        </PageText>

        <div className="space-y-8">
          <div>
            <PageText variant="h3">1.1 Standard iPhone</PageText>
            <PageText variant="h3" className="text-lg font-medium mb-2">Who It's For:</PageText>
            <PageText>Casual users who want a balance of performance and price.</PageText>
            <PageText variant="h3" className="text-lg font-medium mt-4 mb-2">Key Features:</PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Solid Performance thanks to Apple's latest or near-latest chip.</li>
              <li>High-Quality Camera that handles everyday photography with ease.</li>
              <li>Battery Life designed to last through a typical day of moderate use.</li>
            </ul>
            <PageText className="mt-4">
              <span className="font-medium">Lifestyle Scenarios:</span> Students needing a budget-friendly (but still premium) phone, professionals who mainly use productivity apps, and anyone who just wants a reliable device without all the bells and whistles.
            </PageText>
          </div>

          <div>
            <PageText variant="h3">1.2 iPhone Plus</PageText>
            <PageText variant="h3" className="text-lg font-medium mb-2">Who It's For:</PageText>
            <PageText>Fans of bigger screens who want more display real estate without jumping to the Pro models.</PageText>
            <PageText variant="h3" className="text-lg font-medium mt-4 mb-2">Key Features:</PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Larger Display for watching videos, reading eBooks, or scrolling through social media.</li>
              <li>Longer Battery Life due to a bigger battery capacity.</li>
            </ul>
            <PageText className="mt-4">
              <span className="font-medium">Lifestyle Scenarios:</span> Movie buffs, avid social media users, or those who want a bit more screen space for editing photos and documents.
            </PageText>
          </div>

          <div>
            <PageText variant="h3">1.3 iPhone Pro</PageText>
            <PageText variant="h3" className="text-lg font-medium mb-2">Who It's For:</PageText>
            <PageText>Power users who need advanced camera capabilities and top-tier performance.</PageText>
            <PageText variant="h3" className="text-lg font-medium mt-4 mb-2">Key Features:</PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>ProMotion Display for ultra-smooth scrolling and responsive gaming.</li>
              <li>Enhanced Camera System with telephoto or macro lenses for professional-grade shots.</li>
              <li>Stainless Steel Frame for a premium, durable build.</li>
            </ul>
            <PageText className="mt-4">
              <span className="font-medium">Lifestyle Scenarios:</span> Content creators, mobile photographers, or gamers who want the highest performance in a sleek design.
            </PageText>
          </div>

          <div>
            <PageText variant="h3">1.4 iPhone Pro Max</PageText>
            <PageText variant="h3" className="text-lg font-medium mb-2">Who It's For:</PageText>
            <PageText>The ultimate iPhone experience—those who want everything Apple has to offer in one device.</PageText>
            <PageText variant="h3" className="text-lg font-medium mt-4 mb-2">Key Features:</PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Largest Display among the lineup—great for multitasking, video editing, and immersive entertainment.</li>
              <li>Best-In-Class Battery Life that can often last well into the next day with moderate use.</li>
              <li>Advanced Camera Features like improved zoom and low-light performance.</li>
            </ul>
            <PageText className="mt-4">
              <span className="font-medium">Lifestyle Scenarios:</span> Business professionals, mobile filmmakers, or serious iPhone enthusiasts looking for the top-tier Apple device.
            </PageText>
          </div>
        </div>
      </div>
    </div>
  );
};