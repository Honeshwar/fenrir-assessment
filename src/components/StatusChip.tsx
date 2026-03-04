import { cn } from "@/lib/utils";

type StatusType = "Completed" | "Scheduled" | "Failed";

interface StatusChipProps {
  status: StatusType;
  className?: string;
}

const statusStyles: Record<StatusType, string> = {
  Completed: "bg-status-completed/15 text-status-completed border-status-completed/30",
  Scheduled: "bg-muted text-muted-foreground border-border",
  Failed: "bg-destructive/15 text-destructive border-destructive/30",
};

const StatusChip = ({ status, className }: StatusChipProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
};

export default StatusChip;
