import { PageText } from "@/components/ui/page-text";

export const IPhoneBudget = () => {
  return (
    <div className="bg-white mt-12 rounded-xl border border-gray-100 shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <PageText variant="h3">Balancing Your Budget</PageText>
      <PageText>
        Initial Device Cost: Some plans require a small upfront fee.
        Monthly Payments: Factor in data usage, additional services (like Apple Music or Apple TV+), and potential price hikes after promotional periods.
      </PageText>
    </div>
  );
};