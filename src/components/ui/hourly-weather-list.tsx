import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { HourlyWeatherItem } from "./hourly-weather-item";
import type { HourlyWeather, DailyWeather } from "@/lib/schemas/weather";
import { getUpcomingHours } from "@/lib/hourly";

interface HourlyWeatherListProps {
  hourly: HourlyWeather;
  daily?: DailyWeather;
  timezone: string;
}

export function HourlyWeatherList({
  hourly,
  daily,
  timezone,
}: HourlyWeatherListProps) {
  const upcomingHours = getUpcomingHours(hourly, timezone, daily);

  return (
    <ScrollArea className="w-full md:max-w-165">
      <div className="flex gap-6">
        {upcomingHours.map((item) => (
          <HourlyWeatherItem
            key={
              item.isSunrise
                ? `sunrise-${item.time}`
                : item.isSunset
                  ? `sunset-${item.time}`
                  : `hourly-${item.time}`
            }
            time={item.time}
            temperature={item.temperature}
            weatherCode={item.weatherCode}
            isDay={item.isDay}
            isSunrise={item.isSunrise}
            isSunset={item.isSunset}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
