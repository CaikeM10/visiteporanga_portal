import Link from "next/link";
import { cn } from "@/lib/utils";

type SecondaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SecondaryButton({
  href,
  children,
  className,
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40",
        className,
      )}
    >
      {children}
    </Link>
  );
}
