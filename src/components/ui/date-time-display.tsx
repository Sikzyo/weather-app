import { formatDate, formatTime } from "@/lib/date-time";
import { useCurrentTime } from "@/hooks/use-current-time";

interface DateTimeDisplayProps {
  timezone: string | undefined;
}

export function DateTimeDisplay({ timezone }: DateTimeDisplayProps) {
  const now = useCurrentTime();

  return (
    <div className="font-manrope flex flex-col items-end gap-1 font-semibold md:text-2xl">
      <p className="capitalize">{formatDate(timezone, now)}</p>
      <p>{formatTime(timezone, now)}</p>
    </div>
  );
}
