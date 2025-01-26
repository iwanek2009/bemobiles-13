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
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
          question="How to choose the best mobile phone deal"
          answer="Consider your usage needs, budget, and preferred networks. Compare deals across providers and look for special offers or cashback deals."
        />
        <CollapsibleFAQ
          open={openSim}
          onOpenChange={setOpenSim}
          question="Should I choose a pay monthly or SIM only deal?"
          answer="Pay monthly deals are great if you want a new phone and can spread the cost. SIM only deals are better if you're happy with your current phone and just need data and minutes."
        />
      </div>
    </div>
  );
};