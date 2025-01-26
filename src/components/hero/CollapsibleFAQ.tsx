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
          className="w-full flex justify-between items-center bg-white"
        >
          <span>{question}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              open ? "transform rotate-180" : ""
            }`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-white p-4 mt-2 rounded-md">
        {answer}
      </CollapsibleContent>
    </Collapsible>
  );
};