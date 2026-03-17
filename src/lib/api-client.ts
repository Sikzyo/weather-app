import type { WeatherRequestParams } from "@/lib/types/weather.ts";

export const OPEN_METEO_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchApi<T>(params: WeatherRequestParams): Promise<T> {
  const searchParams = new URLSearchParams({
    latitude: params.latitude.toString(),
    longitude: params.longitude.toString(),
  });
  const url = new URL(`${OPEN_METEO_BASE_URL}?${searchParams}`);

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ reason: "Failed to parse error response" }));
    throw new Error(error.reason || `HTTP error ${response.status}`);
  }

  return response.json();
}
