import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "primary" | "dark";
};

const backgrounds = {
  default: "bg-background",
  muted: "bg-muted/30",
  primary: "bg-primary text-primary-foreground",
  dark: "bg-black text-white",
};

export function Section({
  children,
  className,
  background = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28",
        backgrounds[background],
        className,
      )}
    >
      {children}
    </section>
  );
}
