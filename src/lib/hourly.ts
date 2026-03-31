import type { HourlyWeather, DailyWeather } from "@/lib/schemas/weather";

interface UpcomingHour {
  time: string;
  temperature: number;
  weatherCode: number;
  isDay: 0 | 1;
  isSunrise?: true;
  isSunset?: true;
}

export function getUpcomingHours(
  hourly: HourlyWeather,
  timezone: string,
  daily?: DailyWeather,
): UpcomingHour[] {
  const now = new Date();
  const currentHour = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone: timezone,
  }).format(now);

  const hours: UpcomingHour[] = hourly.time
    .map((time, index) => ({
      time,
      temperature: hourly.temperature_2m[index],
      weatherCode: hourly.weather_code[index],
      isDay: hourly.is_day[index] as 0 | 1,
    }))
    .filter((item) => new Date(item.time).getHours() >= parseInt(currentHour));

  if (!daily) return hours;

  const specials: UpcomingHour[] = [];

  daily.sunrise.forEach((time) => {
    if (new Date(time) >= now) {
      specials.push({
        time,
        temperature: 0,
        weatherCode: 0,
        isDay: 1,
        isSunrise: true,
      });
    }
  });

  daily.sunset.forEach((time) => {
    if (new Date(time) >= now) {
      specials.push({
        time,
        temperature: 0,
        weatherCode: 0,
        isDay: 0,
        isSunset: true,
      });
    }
  });

  const all = [...hours, ...specials].sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
  );

  return all;
}
