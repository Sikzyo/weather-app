import { useQuery } from "@tanstack/react-query";
import { fetchWeatherForecast } from "@/lib/api/weather";
import { weatherKeys } from "@/lib/query-keys/weather";

export function useWeatherForecast(latitude: number, longitude: number) {
  return useQuery({
    queryKey: weatherKeys.forecast(latitude, longitude),
    queryFn: () => fetchWeatherForecast({ latitude, longitude }),
    staleTime: 5 * 60 * 1000,
  });
}
