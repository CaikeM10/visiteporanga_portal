import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md",
        className,
      )}
    >
      <span className="font-mono text-xs uppercase tracking-[.35em] text-current">
        {children}
      </span>
    </div>
  );
}
