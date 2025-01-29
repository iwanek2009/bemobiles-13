import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageTextProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "p";
  className?: string;
}

export const PageText = ({ children, variant = "p", className }: PageTextProps) => {
  const baseStyles = {
    h1: "text-4xl md:text-5xl font-bold text-[#111111] mb-6",
    h2: "text-3xl font-bold text-[#111111] mb-4",
    h3: "text-2xl font-bold text-[#111111] mb-4",
    p: "text-gray-600 leading-relaxed mb-4",
  };

  const Component = variant;

  return (
    <Component className={cn(baseStyles[variant], className)}>
      {children}
    </Component>
  );
};