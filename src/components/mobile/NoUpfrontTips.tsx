import { PageText } from "@/components/ui/page-text";

export const NoUpfrontTips = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="mb-6">
            Tips for Choosing the Right Model With No Upfront Cost
          </PageText>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Assess Your Budget</h3>
              <p className="text-gray-600">
                Decide if you need a high-end model or if a standard version meets your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Performance Needs</h3>
              <p className="text-gray-600">
                For heavy multitasking, gaming, or professional photography, lean towards Pro/Ultra models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Size and Comfort</h3>
              <p className="text-gray-600">
                Consider how the phone feels in your hand and whether the screen size is right for your daily use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ecosystem Considerations</h3>
              <p className="text-gray-600">
                Think about what other devices you own (or plan to buy) and how well they integrate with your new smartphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};