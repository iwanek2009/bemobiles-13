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
          className="w-full flex justify-between items-start bg-white text-base md:text-lg shadow-none border border-gray-200 rounded-t-md hover:bg-white px-4 py-4 md:py-3 min-h-[56px]"
        >
          <span className="text-left font-normal pr-8 leading-tight break-words max-w-[85%]">{question}</span>
          <ChevronDown
            className={`h-5 w-5 md:h-4 md:w-4 flex-shrink-0 transition-transform duration-200 mt-1 ${
              open ? "transform rotate-180" : ""
            }`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-white p-4 text-base md:text-lg border-x border-b border-gray-200 rounded-b-md break-words">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
};