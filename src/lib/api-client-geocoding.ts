import type { GeocodingRequestParams } from "@/lib/types/weather.ts";

export const GEOCODING_BASE_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

export async function fetchGeocoding<T>(
  params: GeocodingRequestParams,
): Promise<T> {
  const searchParams = new URLSearchParams({
    name: params.city,
  });

  const url = new URL(`${GEOCODING_BASE_URL}?${searchParams}`);

  const response = await fetch(url);

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ reason: "Failed to parse error response" }));
    throw new Error(error.reason || `HTTP error ${response.status}`);
  }

  return response.json();
}
