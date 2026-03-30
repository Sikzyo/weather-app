import { useParams } from "react-router";
import { useSavedCitiesStore } from "@/hooks/use-saved-city";
import { useWeatherForecast } from "@/hooks/use-weather-forecast";
import { GradientBackground } from "@/components/ui/gradient-background";

export function WeatherPage() {
  const { id } = useParams();
  const { cities } = useSavedCitiesStore();
  const cityId = Number(id);
  const city = cities.find((c) => c.id === cityId);
  const { data } = useWeatherForecast(city!.latitude, city!.longitude);

  const isDay = !!data?.current?.is_day;

  return (
    <>
      <GradientBackground
        weatherCode={data?.current?.weather_code}
        isDay={isDay}
      />
      <div className={!isDay ? "dark" : ""}>
        <header className="flex">
          <a href="/">Volver</a>
          <h1>{city!.name}</h1>
        </header>
        <main>
          <p>{data?.current?.temperature_2m}°</p>
          <p>Código: {data?.current?.weather_code}</p>
        </main>
      </div>
    </>
  );
}
