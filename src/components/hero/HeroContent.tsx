import { CollapsibleFAQ } from "./CollapsibleFAQ";

interface HeroContentProps {
  openDeal: boolean;
  setOpenDeal: (open: boolean) => void;
  openSim: boolean;
  setOpenSim: (open: boolean) => void;
}

export const HeroContent = ({
  openDeal,
  setOpenDeal,
  openSim,
  setOpenSim,
}: HeroContentProps) => {
  return (
    <div>
      <h1 className="pt-5 md:pt-0 text-4xl md:text-5xl font-bold mb-4">
        Mobile phone deals
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Looking for a new phone contract? We can help you find your ideal
        handset on a pay monthly plan that suits your needs.
      </p>
      <div className="flex flex-col gap-4 max-w-[90%] md:max-w-[80%]">
        <CollapsibleFAQ
          open={openDeal}
          onOpenChange={setOpenDeal}
          question="Can I keep my number when switching?"
          answer="Yes. Text 'PAC' to 65075, receive code within minutes, share with new provider. Number transfers within 1-2 business day"
        />
        <CollapsibleFAQ
          open={openSim}
          onOpenChange={setOpenSim}
          question="Do I need to pay anything upfront?"
          answer="Many phones like iPhone 16 and Samsung S24 available with £0 upfront cost, though monthly payments will be slightly higher than paying deposit upfront."
        />
      </div>
    </div>
  );
};