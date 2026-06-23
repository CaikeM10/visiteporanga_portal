import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
