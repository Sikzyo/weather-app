const WEATHER_NAMES: Record<number, string> = {
  0: "Cielo despejado",
  1: "Parcialmente Claro",
  2: "Parcialmente Nublado",
  3: "Nublado",
  45: "Niebla",
  48: "Niebla de escarcha",
  51: "Llovizna ligera",
  53: "Llovizna moderada",
  55: "Llovizna fuerte",
  56: "Llovizna helada ligera",
  57: "Llovizna helada fuerte",
  61: "Lluvia ligera",
  63: "Lluvia moderada",
  65: "Lluvia fuerte",
  66: "Lluvia helada ligera",
  67: "Lluvia helada fuerte",
  71: "Nevada ligera",
  73: "Nevada moderada",
  75: "Nevada fuerte",
  77: "Granos de nieve",
  80: "Chubascos de lluvia ligeros",
  81: "Chubascos de lluvia moderados",
  82: "Chubascos de lluvia fuertes",
  85: "Chubascos de nieve ligeros",
  86: "Chubascos de nieve fuertes",
  95: "Tormenta eléctrica",
  96: "Tormenta eléctrica con granizo ligero",
  99: "Tormenta eléctrica con granizo fuerte",
};

export function getWeatherName(code: number | undefined): string {
  if (code === undefined) return "Sin datos";
  return WEATHER_NAMES[code] ?? "Desconocido";
}
