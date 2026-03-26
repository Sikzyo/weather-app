import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWeatherColors } from "@/lib/weather-colors";

interface WeatherCardSettingsProps {
  onClose: () => void;
  weatherCode: number;
  isDay: boolean;
}

export function WeatherCardSettings({
  onClose,
  weatherCode,
  isDay,
}: WeatherCardSettingsProps) {
  const colors = getWeatherColors(weatherCode, isDay);

  return (
    <div
      data-slot="weather-card-settings"
      className={cn(
        "absolute inset-0 flex flex-col rounded-md p-2 backdrop-blur-sm",
      )}
      style={{
        background: `linear-gradient(to bottom left, 
        color-mix(in srgb, ${colors.gradientFrom} 75%, transparent), 
        color-mix(in srgb, ${colors.gradientTo} 75%, transparent)
    )`,
        color: colors.text,
      }}
    >
      <header className="flex items-center justify-between">
        <h2 className="font-manrope text-2xl font-semibold">Ajustes</h2>
        <button
          onClick={onClose}
          aria-label="Cerrar configuración"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-sm hover:bg-current/10"
        >
          <X size={24} />
        </button>
      </header>
    </div>
  );
}
