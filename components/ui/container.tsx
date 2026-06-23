import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl" | "full";
};

const sizes = {
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[1440px]",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
