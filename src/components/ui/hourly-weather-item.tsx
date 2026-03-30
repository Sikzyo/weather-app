import { createElement } from "react";
import { cn } from "@/lib/utils";
import { getWeatherIcon } from "@/lib/weather-icons";
import { formatTime } from "@/lib/date-time";

interface HourlyWeatherItemProps {
  time: string;
  temperature: number;
  weatherCode: number;
  isDay: 0 | 1;
  timezone: string;
}

export function HourlyWeatherItem({
  time,
  temperature,
  weatherCode,
  isDay,
  timezone,
}: HourlyWeatherItemProps) {
  const WeatherIcon = getWeatherIcon(weatherCode, isDay === 1);
  const date = new Date(time);

  return (
    <article className="flex flex-col items-center gap-2 md:gap-4">
      <span className="font-manrope font-semibold">{temperature}°</span>
      {createElement(WeatherIcon, { className: cn("w-6 h-6") })}
      <time className="font-manrope font-semibold">
        {formatTime(timezone, date)}
      </time>
    </article>
  );
}
