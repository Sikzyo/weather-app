import { useState } from "react";
import { Footer } from "@/components/footer";
import { WeatherCardList } from "@/components/weather-card-list";
import { EmptyState } from "@/components/ui/empty-state";
import { useSavedCity } from "@/hooks/use-saved-city";

export function HomePage() {
  const [city, setCity] = useState("");
  const { savedCities } = useSavedCity();

  return (
    <>
      <header>
        <h1 className="font-manrope text-3xl font-bold md:text-4xl">
          Ciudades
        </h1>
      </header>
      <main
        className={
          savedCities.length === 0
            ? "flex grow flex-col items-center justify-center"
            : "grid grow auto-rows-min grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        }
      >
        {savedCities.length === 0 ? (
          <EmptyState />
        ) : (
          <WeatherCardList
            cities={savedCities}
            onSettings={(id) => console.log("settings for", id)}
          />
        )}
      </main>
      <Footer city={city} onCityChange={setCity} />
    </>
  );
}
