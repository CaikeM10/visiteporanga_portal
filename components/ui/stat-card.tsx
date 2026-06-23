import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StatCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  description?: string;
  className?: string;
};

export function StatCard({
  icon: Icon,
  title,
  value,
  description,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/20",
        className,
      )}
    >
      <Icon className="mb-5 size-7 text-primary" />

      <p className="text-sm text-white/70">{title}</p>

      <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>

      {description && (
        <p className="mt-2 text-sm text-white/60">{description}</p>
      )}
    </div>
  );
}
