import {
  type GeocodingRequestParams,
  type GeocodingResponse,
  GeocodingRequestParamsSchema,
} from "@/lib/schemas/weather.ts";

const GEOCODING_BASE_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function fetchGeocoding(
  params: GeocodingRequestParams,
): Promise<GeocodingResponse> {
  const validated = GeocodingRequestParamsSchema.parse(params);

  const searchParams = new URLSearchParams({
    name: validated.city,
    count: validated.count?.toString() ?? "5",
    language: validated.language ?? "en",
  });

  const url = `${GEOCODING_BASE_URL}?${searchParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Geocoding API error: ${response.status}`);
  }

  return response.json() as GeocodingResponse;
}
