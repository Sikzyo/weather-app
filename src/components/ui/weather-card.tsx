import { createElement } from "react";
import { Settings } from "lucide-react";
import { getWeatherIcon } from "@/lib/weather-icons";
import { getWeatherColors } from "@/lib/weather-colors";

interface WeatherCardProps {
  city: string;
  temperature?: number;
  weatherCode?: number;
  isDay?: boolean;
  isLoading?: boolean;
  error?: string | null;
  onSettings: () => void;
}

export function WeatherCard({
  city,
  temperature,
  weatherCode,
  isDay,
  isLoading,
  error,
  onSettings,
}: WeatherCardProps) {
  const WeatherIcon = getWeatherIcon(weatherCode, isDay, !!error);
  const colors =
    weatherCode !== undefined ? getWeatherColors(weatherCode, isDay) : null;

  return (
    <article
      data-slot="weather-card"
      className="flex flex-col items-center justify-center gap-6 p-2"
      style={{
        background: colors
          ? `linear-gradient(to bottom, ${colors.gradientFrom}, ${colors.gradientTo})`
          : undefined,
      }}
    >
      <header className="flex w-full items-center justify-between">
        <h3 style={{ color: colors?.text }}>{city}</h3>
        <button onClick={onSettings} aria-label="Configuración">
          <Settings />
        </button>
      </header>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && WeatherIcon && (
        <>
          <div style={{ color: colors?.text }}>
            {createElement(WeatherIcon)}
          </div>
          <p style={{ color: colors?.text }}>{temperature}°C</p>
        </>
      )}
    </article>
  );
}
