import { useQuery } from "@tanstack/react-query";
import { fetchGeocoding } from "@/lib/api/geocoding";
import { weatherKeys } from "@/lib/query-keys/weather";

export function useGeocoding(city: string) {
  return useQuery({
    queryKey: weatherKeys.geocoding(city),
    queryFn: () => fetchGeocoding({ city }),
    staleTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: city.length > 0,
  });
}
