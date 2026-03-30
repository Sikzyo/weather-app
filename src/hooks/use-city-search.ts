import { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useGeocoding } from "@/hooks/use-geocoding";
import { type GeocodingResult } from "@/lib/schemas/weather";

interface UseCitySearchReturn {
  city: string;
  setCity: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  results: GeocodingResult[];
  isLoading: boolean;
}

export function useCitySearch(): UseCitySearchReturn {
  const [city, setCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const debouncedCity = useDebounce(city, 300);
  const { data, isLoading } = useGeocoding(debouncedCity);

  const results = data?.results ?? [];

  return { city, setCity, isOpen, setIsOpen, results, isLoading };
}
