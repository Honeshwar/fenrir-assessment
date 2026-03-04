import { cn } from "@/lib/utils";

type SeverityLevel = "Critical" | "High" | "Medium" | "Low";

interface SeverityBadgeProps {
  level: SeverityLevel;
  count?: number;
  className?: string;
}

const severityStyles: Record<SeverityLevel, string> = {
  Critical: "bg-severity-critical text-white",
  High: "bg-severity-high text-white",
  Medium: "bg-severity-medium text-white",
  Low: "bg-severity-low text-white",
};

const SeverityBadge = ({ level, count, className }: SeverityBadgeProps) => {
  if (count !== undefined) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-md text-xs font-semibold",
          severityStyles[level],
          className
        )}
      >
        {count}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold",
        severityStyles[level],
        className
      )}
    >
      {level}
    </span>
  );
};

export default SeverityBadge;
