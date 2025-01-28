import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroTemplate } from "@/components/templates/HeroTemplate";

const ExamplePage = () => {
  return (
    <>
      <Header />
      <HeroTemplate
        title="Example Page Title"
        description="This is an example description for the page using our reusable hero template."
        heroImage="/lovable-uploads/e5af43e9-0d34-4eab-8779-a0261436c139.png"
      >
        <div className="py-8">
          <h2 className="text-2xl font-bold mb-4">Page Content</h2>
          <p>Your page content goes here...</p>
        </div>
      </HeroTemplate>
      <Footer />
    </>
  );
};

export default ExamplePage;