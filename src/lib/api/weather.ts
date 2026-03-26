import {
  type WeatherRequestParams,
  type WeatherForecastResponse,
  WeatherRequestParamsSchema,
  WeatherForecastResponseSchema,
} from "@/lib/schemas/weather.ts";

const OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchWeatherForecast(
  params: WeatherRequestParams,
): Promise<WeatherForecastResponse> {
  const validated = WeatherRequestParamsSchema.parse(params);

  const searchParams = new URLSearchParams({
    latitude: validated.latitude.toString(),
    longitude: validated.longitude.toString(),
    current: "temperature_2m,is_day,weather_code",
  });

  const url = `${OPEN_METEO_BASE_URL}?${searchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data = await response.json();
  return WeatherForecastResponseSchema.parse(data);
}
