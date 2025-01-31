import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FAQItem {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  question: string;
  answer: string;
}

export const CollapsibleFAQ = ({ open, onOpenChange, question, answer }: FAQItem) => {
  return (
    <Collapsible
      open={open}
      onOpenChange={onOpenChange}
      className="w-full"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          className="w-full flex justify-between items-center bg-white text-base md:text-[16px] shadow-none border border-gray-200 rounded-md hover:bg-white px-3 md:px-4 py-3 min-h-[48px]"
        >
          <span className="text-left font-normal text-sm md:text-base pr-2">{question}</span>
          <ChevronDown
            className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ml-2 ${
              open ? "transform rotate-180" : ""
            }`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-white p-3 md:p-4 text-sm md:text-[16px] border-x border-b border-gray-200 rounded-b-md">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
};