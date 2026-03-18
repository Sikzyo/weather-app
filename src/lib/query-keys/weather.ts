export const weatherKeys = {
  all: ["weather"] as const,
  geocoding: (city: string) => [...weatherKeys.all, "geocoding", city] as const,
};
