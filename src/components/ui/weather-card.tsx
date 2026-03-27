import { createElement, useState } from "react";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";

import { getWeatherIcon } from "@/lib/weather-icons";
import { getWeatherColors } from "@/lib/weather-colors";
import { WeatherCardSettings } from "./weather-card-settings";

interface WeatherCardProps {
  cityId: number;
  city: string;
  temperature?: number;
  weatherCode?: number;
  isDay?: boolean;
}

export function WeatherCard({
  cityId,
  city,
  temperature,
  weatherCode,
  isDay,
}: WeatherCardProps) {
  const [showSettings, setShowSettings] = useState(false);
  const WeatherIcon = getWeatherIcon(weatherCode, isDay);
  const colors =
    weatherCode !== undefined ? getWeatherColors(weatherCode, isDay) : null;

  return (
    <article
      data-slot="weather-card"
      className={cn(
        "relative flex flex-col items-center gap-6 rounded-md p-2 md:gap-11",
        !isDay && "dark",
      )}
      style={{
        background: colors
          ? `linear-gradient(to bottom left, ${colors.gradientFrom}, ${colors.gradientTo})`
          : undefined,
        color: colors?.text,
      }}
    >
      {showSettings && (
        <WeatherCardSettings
          onClose={() => setShowSettings(false)}
          weatherCode={weatherCode!}
          isDay={isDay!}
          cityId={cityId}
        />
      )}
      <header className="flex w-full items-center justify-between">
        <h3 className="font-manrope text-2xl font-bold">{city}</h3>
        <button
          onClick={() => setShowSettings(true)}
          aria-label="Configuración"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-colors duration-200 hover:bg-current/10"
        >
          <Settings size={24} />
        </button>
      </header>
      {WeatherIcon && (
        <>
          <div className="flex grow items-center">
            {createElement(WeatherIcon, { size: 100 })}
          </div>
          <p className="font-manrope w-full text-4xl font-bold">
            {temperature}°
          </p>
        </>
      )}
    </article>
  );
}
