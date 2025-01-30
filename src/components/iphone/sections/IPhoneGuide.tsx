import { PageText } from "@/components/ui/page-text";

export const IPhoneGuide = () => {
  return (
    <div className="bg-[#F1F1F1] mt-12 rounded-lg shadow-sm p-6">
      <PageText variant="h2">Step-by-Step: How to Choose Your Ideal iPhone Deal</PageText>
      <PageText>
        Just as you'd follow a process to switch broadband providers, there's a logical way to pick your iPhone contract:
      </PageText>

      <PageText variant="h3">Check Coverage and Speed</PageText>
      <PageText>
        Investigate carrier coverage in your area. A great deal means little if your signal is weak.
        If you plan to use your iPhone for home internet tethering, ensure connection speed and data allowances meet your needs.
      </PageText>

      <PageText variant="h3">Determine Your Usage</PageText>
      <PageText>
        Are you a streaming enthusiast? Look for unlimited data or high data caps.
        Work or study remotely? Prioritize consistent speeds and a reliable network.
      </PageText>
    </div>
  );
};