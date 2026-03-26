export const weatherKeys = {
  all: ["weather"] as const,
  geocoding: (city: string) => [...weatherKeys.all, "geocoding", city] as const,
  forecast: (lat: number, lon: number) =>
    [...weatherKeys.all, "forecast", lat, lon] as const,
};
