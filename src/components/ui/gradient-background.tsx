import { getWeatherColors } from "@/lib/weather-colors";

interface GradientBackgroundProps {
  weatherCode?: number;
  isDay?: boolean;
}

export function GradientBackground({
  weatherCode,
  isDay,
}: GradientBackgroundProps) {
  const colors = getWeatherColors(weatherCode, isDay);

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `linear-gradient(to bottom left, ${colors.gradientFrom}, ${colors.gradientTo})`,
        color: colors.text,
      }}
    />
  );
}
