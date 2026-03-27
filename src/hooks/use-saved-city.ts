import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type GeocodingResult } from "@/lib/schemas/weather";

interface SavedCitiesStore {
  cities: GeocodingResult[];
  addCity: (city: GeocodingResult) => void;
  removeCity: (cityId: number) => void;
}

export const useSavedCitiesStore = create<SavedCitiesStore>()(
  persist(
    (set) => ({
      cities: [],
      addCity: (city) =>
        set((state) =>
          state.cities.some((c) => c.id === city.id)
            ? state
            : { cities: [...state.cities, city] },
        ),
      removeCity: (cityId) =>
        set((state) => ({
          cities: state.cities.filter((c) => c.id !== cityId),
        })),
    }),
    { name: "weather-app:saved-cities" },
  ),
);
