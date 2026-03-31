import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HourlyWeatherItem } from "./hourly-weather-item";
import type { HourlyWeather } from "@/lib/schemas/weather";
import { getUpcomingHours } from "@/lib/hourly";

interface HourlyWeatherListProps {
  hourly: HourlyWeather;
  timezone: string;
}

export function HourlyWeatherList({
  hourly,
  timezone,
}: HourlyWeatherListProps) {
  const upcomingHours = getUpcomingHours(hourly, timezone);

  return (
    <ScrollArea className="w-full md:max-w-165">
      <div className="flex gap-6">
        {upcomingHours.map((item) => (
          <HourlyWeatherItem
            key={item.time}
            time={item.time}
            temperature={item.temperature}
            weatherCode={item.weatherCode}
            isDay={item.isDay}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
