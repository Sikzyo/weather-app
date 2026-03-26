import { type GeocodingResult } from "@/lib/schemas/weather";
import { WeatherCard } from "@/components/ui/weather-card";
import { useWeatherForecast } from "@/hooks/use-weather-forecast";

function WeatherCardWithData({
  cityName,
  latitude,
  longitude,
}: {
  cityName: string;
  latitude: number;
  longitude: number;
}) {
  const { data } = useWeatherForecast(latitude, longitude);

  return (
    <WeatherCard
      city={cityName}
      temperature={data?.current?.temperature_2m}
      weatherCode={data?.current?.weather_code}
      isDay={!!data?.current?.is_day}
    />
  );
}

export function WeatherCardList({ cities }: { cities: GeocodingResult[] }) {
  return (
    <>
      {cities.map((c) => (
        <WeatherCardWithData
          key={c.id}
          cityName={c.name}
          latitude={c.latitude}
          longitude={c.longitude}
        />
      ))}
    </>
  );
}
