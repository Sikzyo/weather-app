import { Link, useParams } from "react-router";
import { createElement } from "react";
import { useSavedCitiesStore } from "@/hooks/use-saved-city";
import { useWeatherForecast } from "@/hooks/use-weather-forecast";
import { GradientBackground } from "@/components/ui/gradient-background";
import { DateTimeDisplay } from "@/components/ui/date-time-display";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWeatherColors } from "@/lib/weather-colors";
import { getWeatherIcon } from "@/lib/weather-icons";
import { getWeatherName } from "@/lib/weather-names";

export function WeatherPage() {
  const { id } = useParams();
  const { cities } = useSavedCitiesStore();
  const cityId = Number(id);
  const city = cities.find((c) => c.id === cityId);

  const { data } = useWeatherForecast(
    city?.latitude ?? 0,
    city?.longitude ?? 0,
  );

  const isDay = !!data?.current?.is_day;
  const weatherCode = data?.current?.weather_code;
  const colors = getWeatherColors(weatherCode, isDay);
  const weatherName = getWeatherName(weatherCode);

  return (
    <>
      <GradientBackground
        weatherCode={data?.current?.weather_code}
        isDay={isDay}
      />
      <section
        className={cn("flex h-full flex-col gap-6 md:gap-10", !isDay && "dark")}
        style={{ color: colors.text }}
      >
        <header className="relative flex h-11 items-center justify-center">
          <Link
            to="/"
            viewTransition
            className="absolute left-0 flex h-11 w-11 items-center justify-center rounded-sm transition-colors duration-200 hover:bg-current/10"
          >
            <ChevronLeft size={34} />
          </Link>
          <h1 className="font-manrope text-2xl font-bold md:text-3xl">
            {city!.name}
          </h1>
        </header>
        <main className="flex h-full flex-col gap-8">
          <figure className="flex items-center justify-between">
            {createElement(getWeatherIcon(weatherCode, isDay), {
              className: cn("w-24 h-24 md:w-30 md:h-30"),
            })}
            <DateTimeDisplay timezone={city!.timezone} />
          </figure>
          <section className="flex grow flex-col items-center justify-center">
            <p className="font-manrope text-[120px] font-semibold md:text-[160px]">
              {data?.current?.temperature_2m}°
            </p>
            <p className="md:text-2xl">{weatherName}</p>
          </section>
        </main>
      </section>
    </>
  );
}
