import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
