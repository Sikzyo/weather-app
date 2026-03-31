import type { HourlyWeather } from "@/lib/schemas/weather";

interface UpcomingHour {
  time: string;
  temperature: number;
  weatherCode: number;
  isDay: 0 | 1;
}

export function getUpcomingHours(
  hourly: HourlyWeather,
  timezone: string,
): UpcomingHour[] {
  const now = new Date();
  const currentHour = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone: timezone,
  }).format(now);

  return hourly.time
    .map((time, index) => ({
      time,
      temperature: hourly.temperature_2m[index],
      weatherCode: hourly.weather_code[index],
      isDay: hourly.is_day[index] as 0 | 1,
    }))
    .filter((item) => new Date(item.time).getHours() >= parseInt(currentHour));
}
