import { z } from "zod";

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

export type GeocodingResult = z.infer<typeof GeocodingResultSchema>;
export type GeocodingResponse = z.infer<typeof GeocodingResponseSchema>;
