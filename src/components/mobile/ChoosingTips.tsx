import { PageText } from "@/components/ui/page-text";

export const ChoosingTips = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="mb-6">
            Tips for Choosing the Right Model
          </PageText>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <PageText variant="h3" className="mb-4">
                Budget vs. Premium
              </PageText>
              <p className="text-gray-600">
                Decide if you want a budget-friendly option or if you're willing to invest in high-end features for a better overall experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <PageText variant="h3" className="mb-4">
                Performance Needs
              </PageText>
              <p className="text-gray-600">
                For heavy multitasking or gaming, consider models with robust processors and high refresh rates.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <PageText variant="h3" className="mb-4">
                Photography & Creative Use
              </PageText>
              <p className="text-gray-600">
                If taking photos or creating content is important, prioritize models with advanced camera features and high-quality displays.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <PageText variant="h3" className="mb-4">
                Contract Flexibility
              </PageText>
              <p className="text-gray-600">
                Look for plans with flexible terms, trade-in offers, and carrier perks that maximize savings.
              </p>
            </div>
          </div>

          <div className="mt-8 text-gray-600">
            <p>
              By aligning your priorities with the available features and contract options, you can confidently choose a model that truly suits your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};