export function formatTime(timezone: string | undefined, date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(date);
}

export function formatDate(timezone: string | undefined, date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(date);
}

export function formatHour(time: string): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(time));
}
