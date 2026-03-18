import { z } from "zod";

// Input

export const GeocodingRequestParamsSchema = z.object({
  city: z.string().min(1, "City name is required"),
  count: z.number().optional(),
  language: z.string().optional(),
});

export const CoordinatesSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export const WeatherRequestParamsSchema = CoordinatesSchema.extend({
  timezone: z.string().optional(),
  hourly: z.array(z.string()).optional(),
  daily: z.array(z.string()).optional(),
  forecast_days: z.number().min(1).max(16).optional(),
  current: z.array(z.string()).optional(),
});

export type GeocodingRequestParams = z.infer<
  typeof GeocodingRequestParamsSchema
>;
export type Coordinates = z.infer<typeof CoordinatesSchema>;
export type WeatherRequestParams = z.infer<typeof WeatherRequestParamsSchema>;

// Output

export const GeocodingResultSchema = z.object({
  id: z.number(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  country: z.string().optional(),
  country_code: z.string().optional(),
  admin1: z.string().optional(),
  timezone: z.string().optional(),
});

export const GeocodingResponseSchema = z.object({
  results: z.array(GeocodingResultSchema).optional(),
});

export const CurrentWeather = z.object({
  temperature_2m: z.number(),
  is_day: z.number().min(0).max(1),
  weather_code: z.number().min(0).max(100),
});

export type GeocodingResult = z.infer<typeof GeocodingResultSchema>;
export type GeocodingResponse = z.infer<typeof GeocodingResponseSchema>;
