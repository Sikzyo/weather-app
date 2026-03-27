import { X, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWeatherColors } from "@/lib/weather-colors";
import { useSavedCitiesStore } from "@/hooks/use-saved-city";

interface WeatherCardSettingsProps {
  onClose: () => void;
  weatherCode: number;
  isDay: boolean;
  cityId: number;
}

export function WeatherCardSettings({
  onClose,
  weatherCode,
  isDay,
  cityId,
}: WeatherCardSettingsProps) {
  const colors = getWeatherColors(weatherCode, isDay);
  const { removeCity } = useSavedCitiesStore();

  return (
    <div
      data-slot="weather-card-settings"
      className={cn(
        "absolute inset-0 flex flex-col gap-4 rounded-md p-2 backdrop-blur-sm",
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
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-sm transition-colors duration-200 hover:bg-current/10"
        >
          <X size={24} />
        </button>
      </header>
      <button
        onClick={() => {
          removeCity(cityId);
          onClose();
        }}
        className="bg-red-2 text-red-10 hover:bg-red-10 hover:text-red-2 flex h-11 items-center justify-between rounded-sm p-2 transition-colors duration-300"
      >
        <span className="font-manrope text-sm font-semibold">
          Eliminar ciudad
        </span>
        <Trash2 size={24} />
      </button>
    </div>
  );
}
