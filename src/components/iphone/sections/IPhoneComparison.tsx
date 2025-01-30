import { PageText } from "@/components/ui/page-text";

export const IPhoneComparison = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <PageText variant="h3">Why Compare iPhone Contracts?</PageText>
      <PageText>
        Comparing different contract deals is crucial, much like how homeowners compare broadband services to find the best plan. Each carrier offers varying benefits, from exclusive app subscriptions to unlimited data. It's not just about the cheapest plan but the one that aligns with your lifestyle—whether you're a heavy streamer, frequent traveler, or a family looking to bundle multiple lines.
      </PageText>

      <PageText variant="h3">Contract Length Matters</PageText>
      <PageText>
        Short-Term Contracts (12 Months): Higher monthly payments but quicker upgrades.
        Long-Term Contracts (24+ Months): Lower monthly costs spread over time, but you're committed to the same provider.
      </PageText>
    </div>
  );
};