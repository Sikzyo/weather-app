import { useState, useEffect } from "react";
import { type GeocodingResult } from "@/lib/schemas/weather";

const SAVED_CITIES_KEY = "weather-app:saved-cities";

export function useSavedCity() {
  const [savedCities, setSavedCities] = useState<GeocodingResult[]>(() => {
    const stored = localStorage.getItem(SAVED_CITIES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(SAVED_CITIES_KEY, JSON.stringify(savedCities));
  }, [savedCities]);

  const addCity = (city: GeocodingResult) => {
    setSavedCities((prev) => {
      if (prev.some((c) => c.id === city.id)) return prev;
      return [...prev, city];
    });
  };

  const removeCity = (cityId: number) => {
    setSavedCities((prev) => prev.filter((c) => c.id !== cityId));
  };

  return { savedCities, addCity, removeCity };
}
